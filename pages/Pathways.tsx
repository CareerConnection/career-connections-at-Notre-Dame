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
        { name: "Modern Web Development"},
        { name: "Database Concepts"},
        { name: "Human Computer Interaction"},
      ],
    },
    {
      industry: "Back End Development",
      classes: [
        { name: "Database Concepts"},
        { name: "Modern Web Development"},
        { name: "Open Source Development"},
      ],
    },
    {
      industry: "Front End Development",
      classes: [
        { name: "Modern Web Development"},
        { name: "Human Computer Interaction"},
        { name: "Open Source Development"},
      ],
    },
    {
      industry: "Startups",
      classes: [
        { name: "Case Studies in Computing-Based Entrepreneurship"},
        { name: "Modern Web Development"},
        { name: "Human Computer Interaction"},
        { name: "Introduction to Artificial Intelligence"},
      ],
    },
    {
      industry: "AI",
      classes: [
        { name: "Introduction to Artificial Intelligence"},
        { name: "Machine Learning"},
        { name: "AI and Social Good: AI and Society"},
      ],
    },
    {
      industry: "Consulting",
      classes: [
        { name: "CSE Service Projects"},
        { name: "Human Computer Interaction"},
        { name: "AI and Social Good: AI and Society"},
      ],
    },
  ];

  return (
    <div className="max-w-5xl container mx-auto p-4">
      <h1 className="text-4xl">Pathways</h1>
      <h2 className="mt-4">See recommended classes for career paths.</h2>
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
