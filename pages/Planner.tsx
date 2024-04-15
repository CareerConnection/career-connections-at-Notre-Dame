import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const totalSemesters = 10;
  const classesPerSemester = 8;

  // Create initial state for all classes in all semesters
  const initialClassesState = Array(totalSemesters)
    .fill(null)
    .map(() => Array(classesPerSemester).fill(""));

  // State to hold all class names
  const [semesters, setSemesters] = useState(initialClassesState);

  const handleInputChange = (semesterIndex, classIndex, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex][classIndex] = value;
    setSemesters(updatedSemesters);
  };

  const saveData = () => {
    // Perform any other save operations you need here

    // Save semesters state to session storage
    sessionStorage.setItem("semesters", JSON.stringify(semesters));
  };

  useEffect(() => {
    sessionStorage.setItem("semesters", JSON.stringify(semesters));
  }, [semesters]);

  return (
    <div className="max-w-5xl container mx-auto p-4">
      <h1 className="text-4xl">Planner</h1>
      <button
        onClick={saveData}
        className="flex items-center justify-center mt-8 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 ease-out"
      >
        Save
      </button>
      {Array.from({ length: totalSemesters / 2 }, (_, row) => (
        <div className="flex flex-row" key={row}>
          {Array.from({ length: 2 }, (_, col) => {
            const semesterIndex = row * 2 + col;
            return (
              <div className="w-1/2 flex flex-col text-lg" key={semesterIndex}>
                <h2 className="mt-4 mb-2">Semester {semesterIndex + 1}</h2>
                {semesters[semesterIndex].map((className, index) => (
                  <input
                    key={index}
                    value={className}
                    onChange={(e) =>
                      handleInputChange(semesterIndex, index, e.target.value)
                    }
                    className="border p-1"
                  />
                ))}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
