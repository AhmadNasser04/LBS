import React from "react";
import Link from "next/link";

function index() {
  return (
    <div
      className={`w-screen h-screen bg-black flex items-center justify-center`}
    >
      <div
        className={`bg-white p-5 rounded-lg text-[#59114D] flex items-center justify-center flex-col space-y-5`}
      >
        <p>COMING SOON</p>
        <Link href={`/`}>
          <button className={`slideButton`}>GO Home</button>
        </Link>
      </div>
    </div>
  );
}

export default index;
