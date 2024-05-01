// import React, { useState, useEffect } from "react";
// import Parse from "parse";
// import { APPLICATION_ID, JAVASCRIPT_KEY, SERVER_URL } from "../environment";

// // Initialize Parse SDK (if not already initialized elsewhere globally)
// Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
// Parse.serverURL = SERVER_URL;

// const Form: React.FC = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Class Form</h1>
//       <form className="text-lg mb-4">
//         <label htmlFor="classOptions">Choose a class:</label>
//         <br />
//         <select id="classOptions">
//           <option>AI For Good</option>
//           <option>Programming Challenges</option>
//           <option>Intro to AI</option>
//           <option>Modern Web Dev</option>
//         </select>

//         <br />

//         <label htmlFor="year">What year did you take this course?</label>
//         <br />
//         <select id="year">
//           <option>Freshman</option>
//           <option>Sophomore</option>
//           <option>Junior</option>
//           <option>Senior</option>
//         </select>

//         <br />

//         <label htmlFor="professor">Who was your professor?</label>
//         <br />
//         <input type="text" id="professor" />
//         <br />

//         <label htmlFor="thoughts">
//           What are your overall thoughts for this class?
//         </label>
//         <br />
//         <textarea id="thoughts" rows={4} cols={50}></textarea>

//         <br />

//         <label htmlFor="difficulty">Rate the class difficulty (1-5):</label>
//         <br />
//         <input type="number" id="difficulty" min={1} max={5} />

//         <br />

//         <label htmlFor="professorRating">Rate the professor (1-5):</label>
//         <br />
//         <input type="number" id="professorRating" min={1} max={5} />

//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { useState, useEffect } from "react";
import Parse from "parse";
import { APPLICATION_ID, JAVASCRIPT_KEY, SERVER_URL } from "../environment";

// Initialize Parse SDK
Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = SERVER_URL;

const Form = () => {
  const [classes, setClasses] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [year, setYear] = useState("");
  const [reviews, setReviews] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ratings, setProfessorRating] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const ClassQuery = new Parse.Query("Class");
      const ProfessorQuery = new Parse.Query("professors");

      try {
        const classResults = await ClassQuery.find();
        const professorResults = await ProfessorQuery.find();

        setClasses(classResults.map((result) => result.toJSON()));
        setProfessors(professorResults.map((result) => result.toJSON()));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="container m-auto width-1/2 p-4">
      <h1 className="text-3xl font-bold mb-4">Class Form</h1>
      <form className="text-lg mb-4" onSubmit={handleSubmit}>
        <label className="" htmlFor="classOptions">Choose a class*</label>
        <br />
        <select
          id="classOptions"
          value={selectedClass}
          className="mb-7 p-2.5 w-96 bg-gray-950 border border-gray-300 text-gray-50 text-sm rounded-lg"
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          {classes.map((c) => (
            <option key={c.objectId} value={c.objectId}>
              {c.class}
            </option>
          ))}
        </select>
        <br />

        <label htmlFor="year">What year did you take this course?</label>
        <br />
        <select
          id="year"
          value={year}
          className="mb-7 p-2.5 w-96 bg-gray-950 border border-gray-300 text-gray-50 text-base rounded-lg"
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
        <br />

        <label htmlFor="professor">Who was your professor?</label>
        <br />
        <select
          id="professor"
          value={selectedProfessor}
          className="mb-7 p-2.5 w-96 bg-gray-950 border border-gray-300 text-gray-50 text-base rounded-lg"
          onChange={(e) => setSelectedProfessor(e.target.value)}
        >
          {professors.map((p) => (
            <option key={p.objectId} value={p.objectId}>
              {p.name}
            </option>
          ))}
        </select>
        <br />

        <label htmlFor="reviews">
          What are your overall thoughts for this class?
        </label>
        <br />
        <textarea
          id="reviews"
          rows={4}
          cols={50}
          value={reviews}
          className="mb-7 block p-2.5 w-96 text-base bg-gray-950 text-gray-50 rounded-lg border border-gray-300" 
          placeholder="Write your thoughts here..."
          onChange={(e) => setReviews(e.target.value)}
        ></textarea>

        <label htmlFor="difficulty">Rate the class difficulty (1-5):</label>
        <br />
        <input
          type="number"
          id="difficulty"
          min={1}
          max={5}
          value={difficulty}
          className="mb-7 w-96 p-2.5 bg-gray-950 border border-gray-300 text-gray-50 text-base rounded-lg" 
          placeholder="5"
          onChange={(e) => setDifficulty(e.target.value)}
        />
        <br />

        <label htmlFor="professorRating">Rate the professor (1-5):</label>
        <br />
        <input
          type="number"
          id="professorRating"
          min={1}
          max={5}
          value={ratings}
          className="mb-7 w-96 p-2.5 bg-gray-950 border border-gray-300 text-gray-50 text-base rounded-lg" 
          placeholder="5"
          onChange={(e) => setProfessorRating(e.target.value)}
        />
        <br />
        <label className="">Upload Syllabus here (if you want)</label>
        <input className="mb-7 w-96 p-2.5 block w-full text-sm text-gray-50 border border-gray-300 rounded-lg cursor-pointer bg-gray-950" 
        id="file_input" 
        type="file" />

        <button 
        type="submit"
        className="inline-block ml-32 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >Submit</button>
      </form>
    </div>
  );
};

export default Form;
