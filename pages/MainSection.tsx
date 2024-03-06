// import React, { useState, useEffect } from "react";
// import Parse from "parse";
// import { APPLICATION_ID, JAVASCRIPT_KEY, SERVER_URL } from "../environment";

// const MainSection: React.FC = () => {
//   const [person, setPerson] = useState<any>(null); // Use "any" for now, replace with proper type

//   useEffect(() => {
//     // Initializing the SDK
//     Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
//     Parse.serverURL = SERVER_URL;

//     const fetchPerson = async () => {
//       try {
//         const query = new Parse.Query('Class');
//         const queryResult = await query.find();
//         const currentPerson = queryResult[1];
//         setPerson(currentPerson);
//       } catch (error) {
//         console.error("Error fetching person:", error);
//       }
//     };

//     fetchPerson();
//   }, []);

//   return (
//     <>
//       <div className="w-full flex justify-center mx-4">
//         <div className="w-full mt-6 max-w-5xl">
//           <div className="text-4xl">Class Details</div>
//           {person && (
//             <div className="w-full flex-col border border-gray-300 p-4 mt-4 rounded-md">
//               <h3 className="text-xl font-bold">Class: {person.get('class')}</h3>
//               <p>ID: {person.get('class')}</p>
//               <p>Professor: {person.get('id')}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainSection;

import React, { useState, useEffect } from "react";
import Parse from "parse";
import { APPLICATION_ID, JAVASCRIPT_KEY, SERVER_URL } from "../environment";

// Initialize Parse SDK
Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = SERVER_URL;

// Function to fetch all objects of a specific class
const getAllObjects = async (className) => {
  try {
    const query = new Parse.Query(className);
    const results = await query.find();
    return results.map((result) => result.toJSON());
  } catch (error) {
    console.error(`Error fetching objects from ${className}:`, error);
    return [];
  }
};

const MainSection: React.FC = () => {
  const [course, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const course = await getAllObjects("Class");
      setPersons(course);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center mx-4">
        <div className="w-full mt-6 max-w-5xl">
          <div className="text-4xl">Courses</div>
          {course.map((person, index) => (
            <div key={index} className="w-full flex-col border border-gray-300 p-4 mt-4 rounded-md">
              <h3 className="text-xl font-bold">{person.class}</h3>
              <p>Professor: {person.professor}</p>
              <p>ID: {person.classID}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainSection;