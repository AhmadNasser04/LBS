import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { auth } from "../../firebase.js";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [registerState, setRegisterState] = useState("idle");
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const signUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setRegisterMessage("Signup Successful");
        setRegisterState("success");
      })
      .catch((error) => {
        console.log(error);
        setRegisterMessage("Signup Failed " + error.code);
        setRegisterState("error");
      });
    await sendEmailVerification(auth.currentUser);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={signUp} className="flex flex-col items-center space-y-5">
        <h1 className="p-5 text-2xl font-bold text-white">Signup</h1>
        <div className="flex flex-col space-y-1 w-full">
          <label htmlFor="email" className="text-gray-400 font-thin">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded bg-transparent border border-gray-500 focus:border-[#59114D] focus:outline-none text-white"
            required
          />
        </div>
        <div className="flex flex-col space-y-1 w-full">
          <label htmlFor="password" className="text-gray-400 font-thin">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded bg-transparent border border-gray-500 focus:border-[#59114D] focus:outline-none text-white"
            required
          />
        </div>
        <div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            ref={captchaRef}
            onChange={(token) => setToken(token)}
          />
        </div>
        {token === null ? (
          <input
            type="submit"
            value="Signup"
            className="bg-[#59114D] w-full p-2 rounded-lg font-bold text-[#111827] cursor-pointer disabled:opacity-80"
            disabled
          />
        ) : (
          <input
            type="submit"
            value="Signup"
            className="bg-[#59114D] w-full p-2 rounded-lg font-bold text-[#111827] cursor-pointer"
          />
        )}
      </form>
      <div
        className={`text-center font-ligh p-5 ${
          registerState === "error" && "text-red-500"
        } ${registerState === "success" && "text-green-500"}`}
      >
        {registerMessage}
      </div>
      <div className="flex items-center my-5">
        <div className="border-b border-gray-500 flex-grow mr-3"></div>
        <div className="text-gray-500">Already have an account?</div>
        <div className="border-b border-gray-500 flex-grow ml-3"></div>
      </div>
    </div>
  );
}

export default Signup;
