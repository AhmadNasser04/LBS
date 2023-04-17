import { getCategories } from "../services";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import React from "react";

function Footer() {
  const [categories, setCategories] = React.useState([]);

  const socials = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/LebaneseBioinformaticsSociety",
      icon: <FacebookIcon />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/LBISociety",
      icon: <TwitterIcon />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/lbisociety/",
      icon: <InstagramIcon />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/lbisociety/",
      icon: <LinkedInIcon />,
    },
  ];

  React.useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly px-10 py-6 space-y-10">
      {/* LOGO */}
      <div className="space-y-2">
        <Link href="#hero" scroll={false}>
          <img
            src="https://media.graphassets.com/y4HpFtDGRIqF6usRYrxl"
            alt="logo"
            className="w-72"
          />
        </Link>
      </div>
      {/* OTHER */}
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="font-bold text-xl">
            Lebanese Bioinformatics Society
          </div>
          <div className="font-light flex space-x-2">
            <div>lamaayoub242@gmail.com</div>
            <div className="border-r-2" />
            <Link href="#contact" scroll={false}>
              <div>Contact Us</div>
            </Link>
          </div>
        </div>
        <div className="flex space-x-5">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-2 w-12 h-12 rounded-full border-2 border-[#59114d] hover:bg-[#59114d] text-[#59114d] hover:text-white"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <div>
          <Link href="/login">
            <button className="slideButton">
              <span>Join today</span>
            </button>
          </Link>
        </div>

        <div className="border-b-2"></div>
        <div className="font-light">@ 2023 Lebanese Bioinformatics Society</div>
        <div className="font-light">Terms & Conditions</div>
      </div>
      {/* CATEGORIES */}
      <div className="space-y-5 font-semibold">
        {categories.map((category) => (
          <div key={category.id}>
            <Link href={category.slug}>{category.name}</Link>
          </div>
        ))}
        <div>
          <Link href="/mission">Mission</Link>
        </div>
        <div>
          <Link href="/">Home</Link>
        </div>
      </div>
      {/* SUGGESTIONS */}
      <div className="space-y-2 rounded-3xl">
        <div>Got any suggestions?</div>
        <div>We would love to listen</div>
        <div>
          <Link href="#contact" scroll={false}>
            <button className="slideButton">
              <span>Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
