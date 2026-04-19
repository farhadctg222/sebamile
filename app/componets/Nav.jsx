'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from "../context/CartContext";

const Nav = () => {

  const pathname = usePathname();
  const { cart } = useCart();

  const links = [
    { name: 'Home', path: "/" },
    { name: 'Login', path: "/login" },
    { name: 'Stuff', path: "/staff" },
    { name: 'Contact', path: "/contact" },
  ];

  return (
    <div className="flex items-center">

      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize font-medium hover:text-blue transition-all ml-5 ${
            link.path === pathname ? "text-white border-b-2 border-accent" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}

      {/* 🛒 CART WITH BADGE */}
      <Link
        href="/cart"
        className={`relative capitalize font-medium hover:text-blue transition-all ml-5 ${
          pathname === "/cart" ? "text-white border-b-2 border-accent" : ""
        }`}
      >
        🛒 Cart

        {cart.length > 0 && (
          <span className="absolute -top-2  bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </Link>

    </div>
  );
};

export default Nav;