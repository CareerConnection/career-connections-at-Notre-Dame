import React, { useState } from "react";
import styles from "../components/navbar.module.css"
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuClick, setMenuClick] = useState(false);

  const toggleMenu = () => setMenuClick(!menuClick);
  const closeMenu = () => setMenuClick(false);

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
            <Link href="/">
              Courses
            </Link>
            
            <Link href="/">
              Planner
            </Link>

            {/* we will make a button component and use it for login button */}
            <Link href="SignUp">
              <div className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 ease-out">
                SignUp
              </div>
            </Link>

            <Link href="LoginPage">
              <div className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 ease-out">
                Login
              </div>
            </Link>

            <Link href="AboutUs">
              <div className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 ease-out">
                About Us
              </div>
            </Link>
          </div>

          {/* <div className={styles.MenuIcon} onClick={toggleMenu}>
            {menuClick ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;