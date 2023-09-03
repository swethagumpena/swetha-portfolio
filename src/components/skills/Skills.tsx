"use client";
import { useState } from "react";
import SkillCard from "./SkillCard";
import { skill } from "../../../types/main";

const Skills = () => {
  const categories = ["Frontend", "Backend", "Others"];
  const [category, setCategory] = useState(categories[0]);
  const skillData = [
    { category: "Frontend", name: "Javascript", image: "/assets/js.jpeg" },
    { category: "Frontend", name: "ReactJs", image: "/assets/react.jpg" },
    { category: "Frontend", name: "Redux", image: "/assets/redux.png" },
    {
      category: "Frontend",
      name: "Typescript",
      image: "/assets/typescript.jpg",
    },
    {
      category: "Frontend",
      name: "TailwindCSS",
      image: "/assets/tailwind.png",
    },
    {
      category: "Frontend",
      name: "MaterialUI",
      image: "/assets/material-ui.png",
    },
    { category: "Frontend", name: "HTML5", image: "/assets/html.png" },
    { category: "Frontend", name: "CSS3", image: "/assets/css.png" },
    {
      category: "Frontend",
      name: "React Native",
      image: "/assets/react-native.png",
    },
    { category: "Frontend", name: "Flutter", image: "/assets/flutter.png" },
    { category: "Frontend", name: "Bootstrap", image: "/assets/bootstrap.jpg" },
    { category: "Frontend", name: "Sass", image: "/assets/sass.png" },
    { category: "Frontend", name: "NextJS", image: "/assets/nextjs.png" },
    { category: "Backend", name: "NodeJs", image: "/assets/nodejs.png" },
    { category: "Backend", name: "ExpressJs", image: "/assets/expressjs.png" },
    {
      category: "Backend",
      name: "PostgreSQL",
      image: "/assets/postgresql.png",
    },
    { category: "Backend", name: "MySQL", image: "/assets/mysql.png" },
    { category: "Others", name: "Python", image: "/assets/python.png" },
    { category: "Others", name: "Googling", image: "/assets/googling.png" },
    {
      category: "Others",
      name: "Prompt Engineering",
      image: "/assets/prompt.png",
    },
    {
      category: "Others",
      name: "Android Studio",
      image: "/assets/android-studio.png",
    },
    { category: "Others", name: "Git", image: "/assets/git.png" },
    { category: "Others", name: "GitHub", image: "/assets/github.png" },
    { category: "Others", name: "Firebase", image: "/assets/firebase.png" },
    { category: "Others", name: "Swagger", image: "/assets/swagger.png" },
    { category: "Others", name: "Postman", image: "/assets/postman.png" },
    { category: "Others", name: "Jira", image: "/assets/jira.png" },
    { category: "Others", name: "Canva", image: "/assets/canva.png" },
    { category: "Others", name: "Figma", image: "/assets/figma.png" },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen mt-12 bg-gray-100 opacity-80 md:mt-0 mx-4 md:mx-0 xl:my-20 2xl:my-0"
    >
      <h2 className="text-4xl text-center">Tech Stack</h2>
      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
        {categories.map((c: string, i: number) => (
          <span
            key={i}
            onClick={() => setCategory(c)}
            className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${
              category.toLowerCase() === c.toLowerCase()
                ? "bg-blue-600 dark:bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 hover:bg-gray-100 hover:dark:bg-gray-900"
            } transition-all capitalize`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
        {skillData
          .filter(
            (s: skill) => s.category.toLowerCase() === category.toLowerCase()
          )
          .map((s: any, i: number) => (
            <SkillCard key={i} {...s} />
          ))}
      </div>
    </div>
  );
};

export default Skills;
