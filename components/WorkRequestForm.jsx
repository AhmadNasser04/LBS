import React from "react";

function WorkRequestForm() {
  return (
    <div
      className={`bg-white p-5 text-black space-y-5 rounded-lg shadow-lg text-center`}
    >
      <h1 className={`font-semibold text-xl`}>Want to showcase your work?</h1>
      <h2 className={`font-light`}>
        Click this button to start filling out the form!
      </h2>
      <button
        className={`bg-black text-white px-8 font-bold w-full py-2 rounded-lg transition-all border-2 border-black hover:bg-white hover:text-black`}
      >
        Start Now
      </button>
    </div>
  );
}

export default WorkRequestForm;
