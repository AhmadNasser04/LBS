import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { auth } from "../../firebase.js";
import GoogleSignIn from "./GoogleSignIn.jsx";

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
          <label htmlFor="email" className="text-white font-thin">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded bg-transparent border border-white focus:outline-none text-white"
            required
          />
        </div>
        <div className="flex flex-col space-y-1 w-full">
          <label htmlFor="password" className="text-white font-thin">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded bg-transparent border border-white focus:outline-none text-white"
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
            className="bg-white w-full p-2 rounded-lg font-bold text-[#59114D] border-2 border-white disabled:opacity-60"
            disabled
          />
        ) : (
          <input
            type="submit"
            value="Signup"
            className="bg-white w-full p-2 rounded-lg font-bold text-[#59114D] cursor-pointer border-2 border-white hover:bg-[#59114D] hover:text-white shadow-lg transition-all"
          />
        )}
      </form>
      <div
        className={`text-center font-ligh p-5 ${
          registerState === "idle" && "hidden"
        } ${registerState === "error" && "text-red-500"} ${
          registerState === "success" && "text-green-500"
        }`}
      >
        {registerMessage}
      </div>
      <div className="flex items-center my-5">
        <div className="border-b border-white flex-grow mr-3"></div>
        <div className="text-white">or</div>
        <div className="border-b border-white flex-grow ml-3"></div>
      </div>
      <GoogleSignIn />
      <div className="flex items-center my-5">
        <div className="border-b border-white flex-grow mr-3"></div>
        <div className="text-white">Already have an account?</div>
        <div className="border-b border-white flex-grow ml-3"></div>
      </div>
    </div>
  );
}

export default Signup;
