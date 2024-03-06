import React, { useState, useEffect } from "react";
import styles from "../components/navbar.module.css";
import Link from "next/link";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const [menuClick, setMenuClick] = useState(false);

  const toggleMenu = () => setMenuClick(!menuClick);
  const closeMenu = () => setMenuClick(false);

  return (
    <>
      <div className="w-full flex mx-4 py-4 items-center justify-center">
        <div className="flex w-full max-w-5xl items-center justify-between">
          <Link href="/">Odyssey</Link>

          <div className="flex items-center gap-4">
            <Link href="/aboutus">About Us</Link>
            <Link href="/courses">Courses</Link>

            {isLoggedIn ? (
              <>
                <Link href="/dashboard">
                  <div className="button">Dashboard</div>
                </Link>
                <Link href="/logout">
                  <div className="button">Logout</div>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">
                  <div className="button">Login</div>
                </Link>
                <Link href="/sign-up">
                  <div className="button">Sign Up</div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
