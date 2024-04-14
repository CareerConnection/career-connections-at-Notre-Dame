import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {

  return (
    <>
      <div className="w-full flex mx-4 py-4 items-center justify-center">

        {/* this is the container */}
        <div className="flex w-full max-w-5xl items-center justify-between">

          {/* this is the home button */}
          <Link href="/">
            Odyssey
          </Link>

          {/* this is the container for the right side of the menu buttons */}
          <div className="flex items-center gap-6">
            <Link href="/Courses" className="hover:text-gray-500 transition-all duration-200 ease-out">
              Courses
            </Link>

            <Link href="/Planner" className="hover:text-gray-500 transition-all duration-200 ease-out">
                Planner
            </Link>
            
            <Link href="/Pathways" className="hover:text-gray-500 transition-all duration-200 ease-out">
              Pathways
            </Link>

            {/* we will make a button component and use it for login button */}

            <Link href="Login">
              <div className="flex items-center justify-center px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-400 transition-all duration-200 ease-out">
                Login
              </div>
            </Link>

            <Link href="SignUp">
              <div className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 ease-out">
                Sign Up
              </div>
            </Link>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;