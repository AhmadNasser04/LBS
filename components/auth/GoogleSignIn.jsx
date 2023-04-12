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
    <div className="bg-white w-full p-2 rounded-lg font-bold text-[#59114D] cursor-pointer text-center border-2 border-white hover:bg-[#59114D] hover:text-white transition-all shadow-lg">
      <button
        onClick={() => signInWithGoogle().then((user) => console.log(user))}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default GoogleSignIn;
