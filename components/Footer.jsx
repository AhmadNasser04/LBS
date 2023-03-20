import React from "react";

function Footer() {
  return (
    <div className="bg-black h-[250px] flex flex-col items-center justify-center text-white space-y-10">
      <div className="font-bold text-2xl">Lebanese Bioinformaticians</div>
      <div>abdullahsrour14@gmail.com</div>
      <div>
        @2023. Proudly made by{" "}
        <a
          href="https://www.linkedin.com/in/ahmad-nasser-034222223/"
          className="underline"
          target="_blank"
        >
          Ahmad Nasser
        </a>
      </div>
    </div>
  );
}

export default Footer;
