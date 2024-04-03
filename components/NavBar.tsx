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
          <div className="flex items-center gap-4">
            <Link href="/Dashboard">
              Courses
            </Link>
            
            <Link href="/Planner">
              Pathways
            </Link>

            {/* we will make a button component and use it for login button */}
            <Link href="SignUp">
              <div className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 ease-out">
                SignUp
              </div>
            </Link>

            <Link href="Login">
              <div className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 ease-out">
                Login
              </div>
            </Link>

            <Link href="Cart">
              <div className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-200 ease-out">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a2 2 0 100-4 2 2 0 000 4zM4 4a2 2 0 012-2h8a2 2 0 012 2v1H4V4zm1 3h10v1H5V7zM5 10h10v6a1 1 0 01-1 1H6a1 1 0 01-1-1v-6z" clip-rule="evenodd" />
                </svg>
                Cart (Planner)
              </div>
            </Link>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;