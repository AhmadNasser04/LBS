import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";

function GoogleSignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#59114D] w-full p-2 rounded-lg font-bold text-[#111827] cursor-pointer text-center">
      <button
        onClick={() => signInWithGoogle().then((user) => console.log(user))}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default GoogleSignIn;
