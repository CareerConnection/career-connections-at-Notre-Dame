import React, { useState } from 'react';

const CartPage = () => {
  const [classes, setClasses] = useState([]);
  const [semesters, setSemesters] = useState(Array.from({ length: 8 }, () => []));
  const [highlightedSemester, setHighlightedSemester] = useState(null);

  const handleAddClass = (className) => {
    setClasses([...classes, className]);
  };

  const handleRemoveClass = (index) => {
    const newClasses = [...classes];
    newClasses.splice(index, 1);
    setClasses(newClasses);
  };

  const handleDrop = (semesterIndex, itemIndex) => {
    const newClasses = [...classes];
    const removedClass = newClasses.splice(itemIndex, 1)[0];
    const newSemesters = [...semesters];
    newSemesters[semesterIndex] = [...newSemesters[semesterIndex], removedClass];
    setClasses(newClasses);
    setSemesters(newSemesters);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drag = (event, className, index) => {
    event.dataTransfer.setData('className', className);
    event.dataTransfer.setData('index', index);
  };

  const drop = (event, semesterIndex) => {
    event.preventDefault();
    const className = event.dataTransfer.getData('className');
    const index = event.dataTransfer.getData('index');
    handleDrop(semesterIndex, index);
    setHighlightedSemester(null);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
      <div className="top-section mb-4">
        <h2 className="text-xl font-bold">Classes of Interest</h2>
        <ul>
          {classes.map((className, index) => (
            <li key={index} draggable onDragStart={(e) => drag(e, className, index)}>
              {className} <button onClick={() => handleRemoveClass(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <div>
          <input type="text" placeholder="Enter class name" />
          <button onClick={() => handleAddClass('New Class')}>Add Class</button>
        </div>
      </div>
      <div className="bottom-section grid grid-cols-8 gap-4">
        {semesters.map((semester, semesterIndex) => (
          <div
            key={semesterIndex}
            className={`cart-semester bg-gray-200 rounded p-4`}
            onDrop={(e) => drop(e, semesterIndex)}
            onDragOver={(e) => {
              e.preventDefault();
              setHighlightedSemester(semesterIndex);
            }}
            onDragLeave={() => setHighlightedSemester(null)}
          >
            <h2>{`Semester ${semesterIndex + 1}`}</h2>
            <ul>
              {semester.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
