"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

// icon
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/Bi";
import { SlHandbag } from "react-icons/sl";
import { FaLanguage } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
    </>
  );
};
export default Navbar;

const TopNav = () => {
  const [lang, setLang] = useState("");

  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
    <section
      id="topNav"
      className="bg-white container mx-auto my-2 flex gap-2">
      <ul className="justify-start items-center hidden md:flex gap-5">
        <li
          role="menuitem"
          className="flex items-center">
          <button className="flex items-center">
            <FormControl
              sx={{ m: 1, minWidth: 80 }}
              size="small">
              <InputLabel id="demo-select-small-label bg-white mr-2">
                <FaLanguage className="text-2xl" />
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={lang}
                label="Lang"
                onChange={handleChange}>
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>Bangla</MenuItem>
                <MenuItem value={30}>Hindi</MenuItem>
              </Select>
            </FormControl>
          </button>
        </li>
        <li
          role="menuitem"
          className="flex items-center">
          <button>
            <BiSearch className="font-weight-bold text-2xl" />
          </button>
        </li>
      </ul>
      <Marquee
        speed={100}
        pauseOnHover
        className="w-28">
        🔥 🔥 🔥 Buy Today and get 10% off your total purchase 🔥 🔥 🔥
      </Marquee>
      <ul className="justify-end items-center hidden md:flex gap-5 ">
        <li
          role="menuitem"
          className="nav-item">
          <Link
            href="/signup"
            className="nav-link font-bold">
            SignUp
          </Link>
        </li>
        <li
          role="menuitem"
          className="nav-item flex items-center gap-1">
          <Link
            href="/login"
            className="nav-link font-bold flex gap-2">
            <span>Login</span>
            <CgProfile className="font-weight-bold text-2xl" />
          </Link>
        </li>
      </ul>
    </section>
  );
};
const BottomNav = () => {
  return (
    <>
      <div className=" bg-gray-800 px-6 md:px-12 lg:px-7">
        <div className="container m-auto flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />
          <div className="w-full flex justify-between items-center md:w-max md:px-0">
            <a
              href="#"
              aria-label="logo">
              <img
                src="/assets/logo/logo-02.png"
                className=""
                alt="Float Fashion"
                width="144"
                height="68"
              />
            </a>
            <div className="flex items-center md:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                className="relative z-40 px-2 py-3 sm:-mr-6">
                <div
                  id="line"
                  className="m-auto h-0.5 w-6 rounded  bg-white  transition duration-300"></div>
                <div
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"></div>
              </label>
            </div>
          </div>

          <label
            role="button"
            htmlFor="toggle_nav"
            className="fixed w-full z-30 h-full top-0 left-0 bg-gray-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"></label>

          <div
            className="flex z-50 flex-col md:flex-row justify-between 
                    items-center gap-y-4 p-6 bg-black md:w-8/12 
                    md:gap-y-4 md:p-0 
                    md:bg-transparent lg:w-8/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
                    md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0">
            <div className="flex md:hidden w-full pb-5">
              <Link
                href="/"
                aria-label="logo">
                <img
                  src="/assets/logo/logo-02.png"
                  className="w-36"
                  alt="Float Fashion"
                  width="144"
                  height="68"
                />
              </Link>
            </div>
            <div className="block w-full h-full md:h-auto">
              <ul className="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
                <li>
                  <Link
                    href="/"
                    className="block md:px-3 group">
                    <div
                      className="relative text-white
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-orange-800">
                      <span className="transition group-hover:text-orange-700">
                        Home
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="block md:px-3 group">
                    <div
                      className="relative text-white cursor-pointer
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full ">
                      <span className="transition group-hover:text-orange-700">
                        Men
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block md:px-3 group">
                    <div
                      className="relative text-white cursor-pointer
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full ">
                      <span className="transition group-hover:text-orange-700">
                        Women
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block md:px-3 group">
                    <div
                      className="relative text-white cursor-pointer
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full ">
                      <span className="transition group-hover:text-orange-700">
                        Kids
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block md:px-3 group">
                    <div
                      className="relative text-white cursor-pointer
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full ">
                      <span className="transition group-hover:text-orange-700">
                        Accessories
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="block md:px-3 group">
                    <div
                      className="relative text-white
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full">
                      <span className="transition group-hover:text-orange-700">
                        Blog
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block md:px-3 group">
                    <div
                      className=" relative text-white
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full">
                      <span className="transition group-hover:text-orange-700">
                        Contact
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col text-white items-center text-2xl">
              <p>
                <CgProfile />
              </p>
              <p>
                <BsHeartFill />
              </p>
              <p>
                <SlHandbag />
              </p>
            </div>
            <ul className="flex md:hidden gap-2 items-center">
              <li className="nav-item">
                <Link
                  href="/signUp"
                  className="block md:px-3 group text-white">
                  SignUp
                </Link>
              </li>
              <li className="nav-item flex items-center gap-1">
                <Link
                  href="/login"
                  className="text-white gap-2 block md:px-3 group">
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
