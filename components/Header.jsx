import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { getCategories } from "../services";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="shadow-md w-full top-0 left-0 z-10">
      <div className="flex items-center justify-evenly bg-black py-8 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-default flex items-center text-white roboto">
          <span className="text-3xl text-[#00c46c] mr-1 pt-2">
            {/* LOGO GOES HERE */}
          </span>
          <Link href="/">Lebanese Bioinformatics Society</Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer md:hidden text-white"
        >
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in bg-black md:bg-transparent ${
            open ? "top-[100px] z-[10]" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-lg md:my-0 my-7">
            <Link
              href="/"
              className={`navItem text-white`}
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li>
          <li className="md:ml-8 text-lg md:my-0 my-7">
            <Link
              href="/about"
              className={`navItem text-white`}
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.name} className="md:ml-8 text-lg md:my-0 my-7">
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
