import React, { useState } from "react";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("idle");

  const resetPassword = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email, { url: "http://localhost:3000/login" })
      .then(() => {
        console.log("Password reset email sent");
        setMessage("Password reset email sent.");
        setState("success");
      })
      .catch((error) => {
        console.log(error);
        setMessage("Password reset email failed " + error.code);
        setState("error");
      });
  };

  return (
    <div>
      <form
        onSubmit={resetPassword}
        className="flex flex-col items-center space-y-5"
      >
        <div className="flex flex-col space-y-1 w-full">
          <label htmlFor="email" className="text-white font-thin">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="p-2 rounded bg-transparent border border-white focus:outline-none text-white"
          />
        </div>
        <p
          className={`${state === "success" && "text-green-500"} ${
            state === "error" && "text-red-500"
          }`}
        >
          {message}
        </p>
        <button className="text-[#59114D] border-2 border-white w-full p-2 rounded-lg font-bold bg-white cursor-pointer hover:text-white hover:bg-[#59114D] transition-all">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPass;
