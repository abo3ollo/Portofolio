"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-3 left-0 right-0 z-50 flex items-center justify-between mx-auto max-w-230 px-10 py-2 rounded-full border border-white/10 bg-[#111111b3] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] ">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 ">
        <div className="w-10.5 h-10.5 rounded-full flex items-center justify-center relative">
          <span className="text-white font-semibold text-2xl">A</span>
        </div>
      </Link>

      {/* Nav Links */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto mr-2"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      <ul
        className={`flex-col lg:flex-row flex lg:flex gap-8 lg:gap-12 list-none m-0 absolute lg:static top-16 left-0 right-0 bg-[#111111f2] lg:bg-transparent border-t lg:border-none border-white/10 lg:rounded-none rounded-b-2xl shadow-lg lg:shadow-none px-6 lg:px-0 py-6 lg:py-0 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} lg:flex`}
      >
        {["About", "Services", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-white/60  text-lg font-medium transition-colors duration-300 hover:text-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      
        <Link
          href="#get-started"
        className="hidden lg:flex items-center gap-2 bg-transparent border border-[#333] text-white px-7 py-3 rounded-full text-base font-medium transition-all duration-300 hover:-translate-y-0.5 "
          onClick={() => setMenuOpen(false)}
        >
          <StarIcon />
          <span className="text-white/60 text-lg">Contact Me</span>
        </Link>
      
    </nav>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-7.5 h-7.5 fill-white shrink-0"
    >
      <g>
        <path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" />
      </g>
    </svg>
  );
}