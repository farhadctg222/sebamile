"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1F5F5B]/95 backdrop-blur-md shadow-md py-3"
          : "bg-[#1F5F5B] py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        
        {/* logo */}
        <Link href="/">
          <h1 className="ml-5 text-lg md:text-xl text-white font-extrabold">
            khawa<span className="text-red-500">.</span>online
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-3">
          <Nav />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden mr-5">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;