import React from "react";

const Form: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Class Form</h1>
      <form className="text-lg mb-4">
        <label htmlFor="classOptions">Choose a class:</label>
        <br />
        <select id="classOptions">
          <option>AI For Good</option>
          <option>Programming Challenges</option>
          <option>Intro to AI</option>
          <option>Modern Web Dev</option>
        </select>

        <br />

        <label htmlFor="year">What year did you take this course?</label>
        <br />
        <select id="year">
          <option>Freshman</option>
          <option>Sophomore</option>
          <option>Junior</option>
          <option>Senior</option>
        </select>

        <br />

        <label htmlFor="professor">Who was your professor?</label>
        <br />
        <input type="text" id="professor" />
        <br />

        <label htmlFor="thoughts">
          What are your overall thoughts for this class?
        </label>
        <br />
        <textarea id="thoughts" rows={4} cols={50}></textarea>

        <br />

        <label htmlFor="difficulty">Rate the class difficulty (1-5):</label>
        <br />
        <input type="number" id="difficulty" min={1} max={5} />

        <br />

        <label htmlFor="professorRating">Rate the professor (1-5):</label>
        <br />
        <input type="number" id="professorRating" min={1} max={5} />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
