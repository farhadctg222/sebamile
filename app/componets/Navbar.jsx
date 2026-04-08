
import Link from 'next/link';
import MobileNav from './MobileNav';
import Nav from './Nav';
import React from 'react';


const Navbar = () => {
    return (
        <header className="py-5 sticky  top-0 bg-[#1F5F5B] xl:py-8 text-">
            <div className="container  mx-auto flex justify-between  items-center">
               {/* logo */}
                <Link href="/">
                <h1 className=" ml-5 text-2xl md:text-lg md:text-md text-white font-extrabold">
                    SebaMile<span className="text-red">.</span><span>com</span>
                </h1>
                </Link>
                {/* desktop nav & hire me button */}
                <div className=" hidden xl:flex items-center gap-3">
                   <Nav></Nav>
                    <Link href="/contact">
                    <button className=" bg-amber-400 text-white mr-5">Donation</button>
                    </Link>

                </div>
                {/* mobile nav */}
                <div className="xl:hidden  mr-5">
                   <MobileNav></MobileNav>

                </div>
               

            </div>

        </header>
      
    );
};

export default Navbar;