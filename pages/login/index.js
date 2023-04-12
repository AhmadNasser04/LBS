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
        <div className="bg-[#59114d] p-10 flex flex-col items-center justify-center rounded-lg shadow-lg space-y-5">
          <Link href="/">
            <button className="bg-white px-8 py-2 rounded-lg shadow-xl font-semibold text-[#59114d] border-2 border-white hover:bg-[#59114d] hover:text-white transition-all">
              Home
            </button>
          </Link>
          <button
            className="bg-white px-8 py-2 rounded-lg shadow-xl font-semibold text-[#59114d] border-2 border-white hover:bg-[#59114d] hover:text-white transition-all"
            onClick={userSignOut}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>
          {mode === "signin" ? (
            <div className="bg-[#59114d] p-16 rounded-xl shadow-xl flex flex-col items-center justify-center">
              <Signin />
              <button className="cta" onClick={() => setMode("signup")}>
                <span class="hover-underline-animation"> SIGN UP </span>
              </button>
            </div>
          ) : (
            <div className="bg-[#59114d] p-16 rounded-xl shadow-xl flex flex-col items-center justify-center">
              <Signup />
              <button className="cta" onClick={() => setMode("signin")}>
                <span class="hover-underline-animation"> SIGN IN </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
