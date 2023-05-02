import React from "react";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";

function AboutPerson({ name, description, picture, linkedin }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-[450px]">
      <div className="group relative flex justify-center items-center cursor-pointer">
        <div className="group filter">
          <img
            className="group relative flex cursor-pointer object-cover filter transition-all duration-300 ease-in-out h-auto w-[80vw] md:w-[35vw]"
            src={picture}
            alt="Team Member"
            loading="lazy"
          />
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-[#a8cdd1]/60 w-[100%] h-[100%] z-0">
          <div className="flex flex-col items-center justify-center h-full space-y-1 md:space-y-3 px-3">
            <p className="text-xl md:text-2xl xl:text-3xl italic text-white opacity-100">
              {name}
            </p>
            <p className="text-white italic text-center text-[0.6rem] md:text-[0.8rem] xl:text-[1rem]">
              {description}
            </p>
            <SocialIcon
              url={linkedin}
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              bgColor={isHovered ? "#0A45C1" : "#398492"}
              fgColor="white"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPerson;
