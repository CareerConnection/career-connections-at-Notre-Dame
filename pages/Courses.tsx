import React, { useState, useEffect } from "react";
import Parse from "parse";
import { APPLICATION_ID, JAVASCRIPT_KEY, SERVER_URL } from "../environment";
import Link from "next/link";
import { useRouter } from "next/router";

// Initialize Parse SDK
Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = SERVER_URL;

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
  const router = useRouter();
  const { course } = router.query;
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterByProfessor, setFilterByProfessor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const courses = await getAllObjects("Class");
      setCourses(courses);

      if (course) {
        const selectedCourse = courses.find(
          (c) =>
            c.class.toLowerCase() ===
            decodeURIComponent(course as string).toLowerCase()
        );
        if (selectedCourse) {
          handleCourseClick(selectedCourse);
        }
      }
    };
    fetchData();
  }, [course]);

  const handleCourseClick = async (course) => {
    setSelectedCourse(course);
    const Class = Parse.Object.extend("Class");
    const query = new Parse.Query(Class);
    query.equalTo("objectId", course.objectId);
    try {
      const result = await query.first();
      setAdditionalInfo(result.toJSON());
    } catch (error) {
      console.error("Error fetching additional information:", error);
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.class.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let sortedCourses = [...filteredCourses];

  if (sortBy === "rating") {
    sortedCourses.sort((a, b) => b.ratings - a.ratings);
  }

  let finalCourses = [...sortedCourses];

  if (filterByProfessor) {
    finalCourses = finalCourses.filter((course) =>
      course.professors.some(
        (professor) =>
          professor.toLowerCase() === filterByProfessor.toLowerCase()
      )
    );
  }

  return (
    <>
      <div className="w-full flex justify-center mx-4 mb-8">
        <div className="w-full mt-6 max-w-5xl">
          <div className="text-4xl">Courses</div>
          <div className="flex mt-4">
            <div
              className="w-1/2"
              style={{
                transform: selectedCourse ? "translateX(0)" : "translateX(0%)",
              }}
            >
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 p-2 rounded-md mr-2"
                />
                <select
                  value={filterByProfessor}
                  onChange={(e) => setFilterByProfessor(e.target.value)}
                  className="border border-gray-300 p-2 rounded-md"
                >
                  <option value="">Filter by professor...</option>
                  {courses.map((course) =>
                    course.professors.map((professor) => (
                      <option key={professor} value={professor}>
                        {professor}
                      </option>
                    ))
                  )}
                </select>
              </div>
              {finalCourses
                .sort((a, b) => a.class.localeCompare(b.class))
                .map((course, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 p-4 mt-4 rounded-md cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-out"
                    onClick={() => handleCourseClick(course)}
                  >
                    <h3 className="text-xl font-bold">{course.class}</h3>
                    <p>Professor: {course.professors.join(", ")}</p>
                    <p>ID: {course.classID}</p>
                  </div>
                ))}
            </div>
            {selectedCourse && additionalInfo && (
              <div
                className="w-1/2 pl-4 pr-4"
                style={{ transform: "translateX(10%)" }}
              >
                <div className="flex flex-col max-h-[80vh] sticky top-6 border border-gray-300 p-4 gap-2 rounded-md overflow-auto">
                  <h3 className="text-xl font-bold">{selectedCourse.class}</h3>
                  <Link
                    href="https://forms.gle/kswZuYTK8F6wnEnf7"
                    target="_blank"
                    className="text-blue-500 underline hover:text-blue-300 transition-all duration-200 ease-out"
                  >
                    Leave a review
                  </Link>
                  {additionalInfo.syllabus && (
                    <Link
                      href={additionalInfo.syllabus}
                      target="_blank"
                      className="text-blue-500 underline hover:text-blue-300 transition-all duration-200 ease-out"
                    >
                      Past Syllabus
                    </Link>
                  )}
                  <p>
                    <a className="font-bold">Difficulty:</a>{" "}
                    {additionalInfo.difficulties}/5
                  </p>
                  <p>
                    <a className="font-bold">Description:</a>{" "}
                    {additionalInfo.description}
                  </p>
                  <p>
                    <a className="font-bold">Summarized Review:</a>{" "}
                    {additionalInfo.reviews}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
