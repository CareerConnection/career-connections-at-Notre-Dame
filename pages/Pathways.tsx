import React from "react";

interface Class {
  name: string;
  time: string;
}

interface IndustryClass {
  industry: string;
  classes: Class[];
  color: string;
}

const Planner: React.FC = () => {
  const industryClasses: IndustryClass[] = [
    {
      industry: "Full Stack Development",
      classes: [
        { name: "Frontend Frameworks", time: "9:00 AM - 10:30 AM" },
        { name: "Backend Technologies", time: "11:00 AM - 12:30 PM" },
        { name: "Database Management", time: "2:00 PM - 3:30 PM" },
      ],
      color: "bg-blue-200",
    },
    {
      industry: "Back End Development",
      classes: [
        { name: "Server-side Programming", time: "9:00 AM - 10:30 AM" },
        { name: "Database Design", time: "11:00 AM - 12:30 PM" },
        { name: "API Development", time: "2:00 PM - 3:30 PM" },
      ],
      color: "bg-green-200",
    },
    {
      industry: "Consulting",
      classes: [
        { name: "Problem Solving Strategies", time: "9:00 AM - 10:30 AM" },
        { name: "Client Communication", time: "11:00 AM - 12:30 PM" },
        { name: "Project Management", time: "2:00 PM - 3:30 PM" },
      ],
      color: "bg-yellow-200",
    },
    {
      industry: "Front End Development",
      classes: [
        { name: "HTML/CSS/JavaScript", time: "9:00 AM - 10:30 AM" },
        { name: "Frontend Frameworks", time: "11:00 AM - 12:30 PM" },
        { name: "Responsive Design", time: "2:00 PM - 3:30 PM" },
      ],
      color: "bg-pink-200",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pathways</h1>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Curated Classes for Different Industries</h2>
        {industryClasses.map((industryClass, index) => (
          <div key={index} className={`mb-8 ${industryClass.color}`}>
            <h3 className="text-xl font-bold mb-2">{industryClass.industry}</h3>
            <div className="space-y-4">
              {industryClass.classes.map((cls, idx) => (
                <div
                  key={idx}
                  className="p-4 border rounded-md shadow-md hover:shadow-lg transition duration-300"
                >
                  <h4 className="text-lg font-bold">{cls.name}</h4>
                  <p className="text-sm">{cls.time}</p>
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
