import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Signin from "../../components/auth/Signin";
import Signup from "../../components/auth/Signup";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("signin");

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pt-52 flex flex-col items-center justify-center space-y-5">
      {user ? (
        <div className="bg-[#111827] p-10 flex flex-col items-center justify-center rounded-lg shadow-lg space-y-5">
          <Link href="/">
            <button className="slideButton">Home</button>
          </Link>
          <button className="slideButton" onClick={userSignOut}>
            Sign out
          </button>
        </div>
      ) : (
        <div>
          {mode === "signin" ? (
            <div className="bg-[#111827] p-16 rounded-xl shadow-xl flex flex-col items-center justify-center">
              <Signin />
              <button
                className="text-center text-white cursor-pointer"
                onClick={() => setMode("signup")}
              >
                Signup
              </button>
            </div>
          ) : (
            <div className="bg-[#111827] p-16 rounded-xl shadow-xl flex flex-col items-center justify-center">
              <Signup />
              <button
                className="text-center text-white cursor-pointer"
                onClick={() => setMode("signin")}
              >
                Signin
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
