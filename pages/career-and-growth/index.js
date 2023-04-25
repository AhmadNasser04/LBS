import React from "react";
import Link from "next/link";

function index() {
  return (
    <div
      className={`w-screen h-screen bg-black flex items-center justify-center flex-col`}
    >
      <div>
        <h1
          className={`text-white font-bold shadow-xl shadow-[#59114d] text-5xl`}
        >
          COMING SOON
        </h1>
      </div>
      <div className="mt-24" />
      <div className="bar">
        <div className="ball"></div>
      </div>
    </div>
  );
}

export default index;
