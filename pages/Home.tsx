import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Odyssey</h1>
      <p className="max-w-xl text-lg text-center mt-2">Find class reviews and syllabuses easily.</p>
      <div className="flex flex-row gap-2 mt-4">
        <Link href="SignUp">
          <div className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 ease-out"
          >
            Sign up
          </div>
        </Link>

        <Link href="https://www.loom.com/share/9257fe4c3af649bcaf4db4de1f352ba4?sid=a9e4d052-6f82-41a0-99af-bbddd0ed9f93" target="_blank" >
          <div className="flex items-center justify-center bg-gray-200 ml-2 px-4 py-2 text-black rounded-md hover:bg-gray-400 transition-all duration-200 ease-out"
          >
            Click to see our first demo :&#41;
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
