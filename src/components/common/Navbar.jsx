"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { ChartLine, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/", icon: MdHome, className: "w-21!" },
  { label: "Timeline", href: "/timeline", icon: RiTimeLine },
  { label: "Stats", href: "/stats", icon: ChartLine, className: "w-21!" },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const navLinksClasses = `text-secondary flex gap-1 items-center  font-semibold  border border-2 border-white hover:border-primary rounded transition-all duration-300 px-2  py-1 active:scale-90 w-27 justify-center cursor-pointer`;
  return (
    <header className="border-b border-gray-200 sticky  z-50">
      <nav className="wrapper flex items-center justify-between">
        <div className="left">
          <Image src={logo} alt={"logo"} height={100} width={100} />
        </div>

        {/* Desktop menu  */}
        <div className="right">
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map(({ label, href, icon: Icon, className }, idx) => (
              <Link
                href={href}
                key={idx}
                className={`${navLinksClasses} ${pathName === href ? "bg-primary text-white" : ""} ${className || ""} `}
              >
                {" "}
                <Icon /> {label}
              </Link>
            ))}
          </ul>
        </div>

        {/* Toggle menu button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="active:scale-90 transition-all duration-200" />
          ) : (
            <FaBars className="active:scale-90 transition-all duration-200" />
          )}
        </button>
      </nav>
{/* mobile menu */}
      <ul
        className={`flex flex-col items-center gap-4 py-3 z-20 md:hidden absolute inset-0  bg-white  h-40 transition-all duration-300 ease-in-out ${isMenuOpen ? "top-12" : "-top-40"}`}
      >
        {navLinks.map(({ label, href, icon: Icon, className }, idx) => (
          <Link
           onClick={() => setIsMenuOpen(!isMenuOpen)}
            href={href}
            key={idx}
            className={`${navLinksClasses} ${pathName === href ? "bg-primary text-white" : ""} ${className || ""} `}
          >
            {" "}
            <Icon /> {label}
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
