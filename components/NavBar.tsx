import React, { useState, useEffect } from "react";
import Link from "next/link";
import Parse from "parse";
import { APPLICATION_ID, JAVASCRIPT_KEY, SERVER_URL } from "../environment";

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = SERVER_URL;

const Navbar: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Check if a user is logged in when component mounts
  useEffect(() => {
    const currentUser = Parse.User.current();
    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await Parse.User.logOut();
      setIsLoggedIn(false);
      // Redirect or perform any other actions after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };



  return (
    <>
      <div className="w-full flex mx-4 py-4 items-center justify-center">

        {/* this is the container */}
        <div className="flex w-full max-w-5xl items-center justify-between">

          {/* this is the home button */}
          <Link href="/" className="font-bold">
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

            <Link href="https://github.com/CareerConnection/career-connections-at-Notre-Dame" target="_blank" className="hover:text-gray-500 transition-all duration-200 ease-out">
              GitHub
            </Link>

            {/* we will make a button component and use it for login button */}

            {isLoggedIn ? (
                <div onClick={handleLogout} className="flex items-center justify-center px-4 py-2 bg-gray-200 text-black rounded-md cursor-pointer hover:bg-gray-400 transition-all duration-200 ease-out">
                  Log out
                </div>
            ) : (
              <>
                <Link href="Login">
                  <div className="flex items-center justify-center px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-400 transition-all duration-200 ease-out">Log in</div>
                </Link>
                <Link href="SignUp">
                  <div className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 ease-out">Sign up</div>
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