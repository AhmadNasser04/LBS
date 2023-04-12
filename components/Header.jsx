import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { getCategories } from "../services";
import Link from "next/link";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
    window.addEventListener("scroll", () => setScrollPosition(window.scrollY));
  }, []);

  return (
    <div className=" flex items-center justify-center z-10 fixed w-full">
      <div
        className={`flex items-center justify-evenly ${
          scrollPosition > 500 ? "bg-black" : "bg-[#091023]"
        } shadow-lg w-full ${
          scrollPosition <= 50
            ? "py-6 opacity-100"
            : `py-2 opacity-80 ${open && "py-4 opacity-100"}`
        } lg:px-10 px-7 transition-all`}
      >
        <div className="font-bold text-2xl cursor-default flex items-center text-white roboto">
          <Link href="/" className="flex items-center justify-center space-x-2">
            <img
              src="https://media.graphassets.com/HvK0jXyRDGuhFMM07CQH"
              alt="logo"
              className="w-16 z-50"
            />
            <div className="hidden lg:inline-block">
              Lebanese Bioinformatics Society
            </div>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer lg:hidden text-white z-50"
        >
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </div>

        <ul
          className={`flex lg:flex-row flex-col justify-center items-center lg:pb-0 pb-12 absolute top-0 lg:static lg:z-auto z-[-1] left-0 w-screen h-screen lg:h-auto lg:w-auto lg:pl-0 pl-9 transition-all duration-200 ease-in bg-black lg:bg-transparent ${
            open ? "left-0 z-[10]" : "left-[-1000px]"
          }`}
        >
          <li className="lg:ml-8 text-lg lg:my-0 my-7">
            <Link
              href="/"
              className={`navItem text-white`}
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li>
          <li className="lg:ml-8 text-lg lg:my-0 my-7">
            <Link
              href="/mission"
              className={`navItem text-white`}
              onClick={() => setOpen(!open)}
            >
              Mission
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.name} className="lg:ml-8 text-lg lg:my-0 my-7">
              <Link
                href={category.slug}
                className={`navItem text-white`}
                onClick={() => setOpen(!open)}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
