import React from "react";
import ForgotPass from "../../components/auth/ForgotPass";

export default function reset() {
  return (
    <div className="pt-52 flex flex-col items-center justify-center space-y-5">
      <div className="bg-[#111827] p-16 rounded-xl shadow-xl flex flex-col items-center justify-center">
        <ForgotPass />
      </div>
    </div>
  );
}
