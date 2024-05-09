import React from "react";

interface Class {
  name: string;
}

interface IndustryClass {
  industry: string;
  classes: Class[];
}

const Planner: React.FC = () => {
  const industryClasses: IndustryClass[] = [
    {
      industry: "Full Stack Development",
      classes: [
        { name: "Modern Web Development   ID:CSE 40693"},
        { name: "Database Concepts   ID:CSE 30246"},
        { name: "Human Computer Interaction   ID:CSE 40424"},
      ],
    },
    {
      industry: "Back End Development",
      classes: [
        { name: "Database Concepts   ID:CSE 30246"},
        { name: "Modern Web Development   ID:CSE 40693"},
        { name: "Open Source Development    Not Currently Offered"},
      ],
    },
    {
      industry: "Front End Development",
      classes: [
        { name: "Modern Web Development   ID:CSE 40693"},
        { name: "Human Computer Interaction   ID:CSE 40424"},
        { name: "Open Source Development    Not Currently Offered"},
        { name: "Data Visualization   ID:CSE 40838"},
      ],
    },
    {
      industry: "Startups",
      classes: [
        { name: "Case Studies in Computing-Based Entrepreneurship"},
        { name: "Modern Web Development   ID:CSE 40693"},
        { name: "Human Computer Interaction   ID:CSE 40424"},
        { name: "Introduction to Artificial Intelligence    ID:CSE 30124"},
        { name: "Game Development    ID:CSE 40232"},
      ],
    },
    {
      industry: "AI",
      classes: [
        { name: "Introduction to Artificial Intelligence    ID:CSE 30124"},
        { name: "Machine Learning   ID:CSE 40625"},
        { name: "AI and Social Good: AI and Society   Not Currently Offered"},
      ],
    },
    {
      industry: "Consulting",
      classes: [
        { name: "CSE Service Projects"},
        { name: "Human Computer Interaction   ID:CSE 40424"},
        { name: "AI and Social Good: AI and Society   Not Currently Offered"},
      ],
    },
  ];

  return (
    <div className="max-w-5xl container mx-auto p-4">
      <h1 className="text-4xl">Pathways</h1>
      <h2 className="mt-4">See recommended current class offerings for career paths.</h2>
      <div className="mt-8">
        {industryClasses.map((industryClass, index) => (
          <div key={index}>
            <h3 className="text-xl mt-4">{industryClass.industry}</h3>
            <div className="flex flex-col gap-2 mt-2">
              {industryClass.classes.map((cls, idx) => (
                <div
                  key={idx}
                  className="p-4 border rounded-md"
                >
                  <h4 className="">{cls.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planner;
