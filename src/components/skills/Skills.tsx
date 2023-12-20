"use client";
import { useState } from "react";
import SkillCard from "./SkillCard";
import { skill } from "../../../types/main";

const Skills = () => {
  const categories = ["Languages", "Web & Mobile", "Cloud & Data", "Others"];
  const [category, setCategory] = useState(categories[0]);
  const skillData = [
    {
      category: "Languages",
      name: "Javascript",
      image: "/assets/skills/js.jpeg",
    },
    {
      category: "Languages",
      name: "Python",
      image: "/assets/skills/python.png",
    },
    { category: "Languages", name: "C#", image: "/assets/skills/csharp.png" },
    { category: "Languages", name: "Scala", image: "/assets/skills/scala.png" },
    { category: "Languages", name: "Java", image: "/assets/skills/java.png" },
    { category: "Languages", name: "C++", image: "/assets/skills/cpp.png" },
    { category: "Languages", name: "SQL", image: "/assets/skills/sql.jpg" },
    {
      category: "Web & Mobile",
      name: "HTML5",
      image: "/assets/skills/html.png",
    },
    { category: "Web & Mobile", name: "CSS3", image: "/assets/skills/css.png" },
    {
      category: "Web & Mobile",
      name: "Typescript",
      image: "/assets/skills/typescript.jpg",
    },
    {
      category: "Web & Mobile",
      name: "ReactJs",
      image: "/assets/skills/react.jpg",
    },
    {
      category: "Web & Mobile",
      name: "React Native",
      image: "/assets/skills/react-native.png",
    },
    {
      category: "Web & Mobile",
      name: "VueJS",
      image: "/assets/skills/vue.jpg",
    },
    {
      category: "Web & Mobile",
      name: "Flutter",
      image: "/assets/skills/flutter.png",
    },
    {
      category: "Web & Mobile",
      name: "NodeJs",
      image: "/assets/skills/nodejs.png",
    },
    {
      category: "Web & Mobile",
      name: "ExpressJs",
      image: "/assets/skills/expressjs.png",
    },
    {
      category: "Web & Mobile",
      name: "Redux",
      image: "/assets/skills/redux.png",
    },
    {
      category: "Web & Mobile",
      name: "TailwindCSS",
      image: "/assets/skills/tailwind.png",
    },
    {
      category: "Web & Mobile",
      name: "MaterialUI",
      image: "/assets/skills/material-ui.png",
    },
    {
      category: "Web & Mobile",
      name: "Bootstrap",
      image: "/assets/skills/bootstrap.jpg",
    },
    {
      category: "Web & Mobile",
      name: "Sass",
      image: "/assets/skills/sass.png",
    },
    {
      category: "Web & Mobile",
      name: "NextJS",
      image: "/assets/skills/nextjs.png",
    },

    { category: "Cloud & Data", name: "AWS", image: "/assets/skills/aws.png" },
    {
      category: "Cloud & Data",
      name: "Hadoop",
      image: "/assets/skills/hadoop.jpg",
    },
    {
      category: "Cloud & Data",
      name: "Spark",
      image: "/assets/skills/spark.png",
    },
    {
      category: "Cloud & Data",
      name: "PostgreSQL",
      image: "/assets/skills/postgresql.png",
    },
    {
      category: "Cloud & Data",
      name: "MySQL",
      image: "/assets/skills/mysql.png",
    },

    {
      category: "Others",
      name: "Tableau",
      image: "/assets/skills/tableau.png",
    },
    {
      category: "Others",
      name: "Googling",
      image: "/assets/skills/googling.png",
    },
    {
      category: "Others",
      name: "Prompt Engineering",
      image: "/assets/skills/prompt.png",
    },
    {
      category: "Others",
      name: "Android Studio",
      image: "/assets/skills/android-studio.png",
    },
    { category: "Others", name: "Git", image: "/assets/skills/git.png" },
    { category: "Others", name: "GitHub", image: "/assets/skills/github.png" },
    {
      category: "Others",
      name: "Firebase",
      image: "/assets/skills/firebase.png",
    },
    {
      category: "Others",
      name: "Postman",
      image: "/assets/skills/postman.png",
    },
    {
      category: "Others",
      name: "Swagger",
      image: "/assets/skills/swagger.png",
    },
    { category: "Others", name: "Jira", image: "/assets/skills/jira.png" },
    { category: "Others", name: "Canva", image: "/assets/skills/canva.png" },
    { category: "Others", name: "Figma", image: "/assets/skills/figma.png" },
  ];

  return (
    <div id="skills" className="min-h-screen bg-gray-100 opacity-80">
      <h2 className="text-4xl text-center">Tech Stack</h2>
      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/2 mx-auto mt-6 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
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
