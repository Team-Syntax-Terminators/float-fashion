import Link from "next/link";
import React from "react";

// icon
import { CgProfile } from 'react-icons/cg';
import { BiSearch } from 'react-icons/Bi';
import { BsTranslate } from 'react-icons/Bs';


const Navbar = () => {
  return (
    <>
      <TopNav />
    </>
  )
};
export default Navbar;

const TopNav = () => {
  return (
    <section id="topNav" className="bg-white container mx-auto my-2">
      <ul className="justify-center items-center md:flex gap-5">
        <li role="menuitem" className="flex items-center">
          <button>
            <BsTranslate className="font-weight-bold text-2xl" />
          </button>
        </li>
        <li role="menuitem" className="flex items-center">
          <button>
            <BiSearch className="font-weight-bold text-2xl" />
          </button>
        </li>
        <li role="menuitem" className="nav-item">
          <Link href="/signup" className="nav-link font-bold">Create Account</Link>
        </li>
        <li role="menuitem" className="nav-item flex items-center gap-1">
          <Link href="/login" className="nav-link font-bold flex gap-2">
            <span>Login</span>
            <CgProfile className="font-weight-bold text-2xl" />
          </Link>
        </li>
      </ul>
    </section>
  )
}
