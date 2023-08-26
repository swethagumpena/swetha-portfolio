"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const navOptions = ["home", "about", "projects", "experience", "contact"];

  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "border-b bg-white bg-opacity-40" : "border-b-0"
      } dark:bg-gray-900 dark:bg-opacity-40 dark:border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed`}
    >
      <nav className="lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-4 hidden sm:flex items-center justify-between">
        <Link
          href={"/"}
          className="2xl:ml-6 hover:text-blue-900 hover:dark:text-blue-600 transition-colors duration-300"
        >
          <Image
            src="/sg-logo-black.png"
            width={40}
            height={40}
            quality={100}
            alt={""}
          />
        </Link>
        <ul className="flex items-center gap-8">
          {navOptions.map((option, i) => (
            <li key={i}>
              <ScrollLink
                className="hover:text-blue-900 hover:dark:text-blue-600 transition-colors capitalize cursor-pointer"
                to={option}
                offset={-60}
                smooth={true}
                duration={500}
                isDynamic={true}
              >
                {option}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
