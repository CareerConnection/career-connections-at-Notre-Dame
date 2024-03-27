import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Odyssey</h1>
      <p className="text-lg mb-8">This is where you will find the right schedule for you!</p>
      <a href="/Login" className="button">
        Log In
      </a>
      <a href="/SignUp" className="button">
        Sign Up
      </a>
      
    </div>
  );
};

export default Home;
