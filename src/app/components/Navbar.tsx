"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface NavBarProps {}

const Navbar: FC = () => {
  return (
    <>
      <header className="py-4 bg-black sm:py-6" x-data="{expanded: false}">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <Link href="/" className="flex">
                <Image
                  width={100}
                  height={100}
                  src="/assets/logo/one_Stop.png"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="flex md:hidden">
              <button type="button" className="text-white">
                <span x-show="!expanded" aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span x-show="expanded" aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
              <Link
                href="/feature"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Features{" "}
              </Link>

              <Link
                href="/support"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Support{" "}
              </Link>
            </nav>

            <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a
                href="#"
                title=""
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                role="button"
              >
                {" "}
                Login{" "}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
