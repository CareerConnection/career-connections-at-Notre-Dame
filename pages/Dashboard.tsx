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

const Dashboard: React.FC = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const courses = await getAllObjects("Class");
      setCourses(courses);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center mx-4">
        <div className="w-full mt-6 max-w-5xl">
          <div className="text-4xl">Courses</div>
          {courses.map((course, index) => (
            <div key={index} className="w-full flex-col border border-gray-300 p-4 mt-4 rounded-md">
              <h3 className="text-xl font-bold">{course.class}</h3>
              <p>Professor: {course.professor}</p>
              <p>ID: {course.classID}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
