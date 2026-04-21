"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import React, { useEffect, useState } from "react";

const Navbar = () => {


  

  return (
   <div className="fixed top-0 left-0 right-0 z-50 bg-cyan-800 shadow-md">
  <div className="flex justify-between items-center w-full  max-w-7xl mx-auto">
    
    <Link href="/">
      <h1 className="text-lg m-3 md:text-xl text-white font-extrabold">
        khawa<span className="text-red-500">.</span>online
      </h1>
    </Link>

    <div className="hidden xl:flex items-center gap-3">
      <Nav />
    </div>

    <div className="xl:hidden">
      <MobileNav />
    </div>

  </div>
</div>
  );
};

export default Navbar;