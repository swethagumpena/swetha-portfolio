import { project } from "../../../types/main";
import { useState } from "react";
import { Link } from "react-scroll";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      name: "Candy Crush",
      image: "/assets/projects/web-candy-crush.png",
      category: "Web",
      description: "Engaging 'Candy Crush' style puzzle game",
      techstack: "HTML, CSS, JavaScript, jQuery",
      links: {
        visit: "https://swethagumpena.github.io/Candy-Crush/",
        code: "https://github.com/swethagumpena/Candy-Crush",
        video: "",
      },
    },
    {
      name: "Everything Pets",
      image: "/assets/projects/web-everything-pets.png",
      category: "Web",
      description:
        "Pet management application built from a user-centered approach",
      techstack: "React JS",
      links: {
        visit: "https://swethagumpena.github.io/Everything-Pets/stores.html",
        code: "https://github.com/swethagumpena/Everything-Pets",
        video: "",
      },
    },
    {
      name: "Cooking Connect",
      image: "/assets/projects/web-cooking-connect.png",
      category: "Web",
      description:
        "Platform where cooking enthusiasts can connect with each other and share their recipes",
      techstack: "React JS, Supabase",
      links: {
        visit: "https://cooking-connect.netlify.app/",
        code: "https://github.com/swethagumpena/Cooking-connect",
        video: "",
      },
    },
    {
      name: "Cricket Mania",
      image: "/assets/projects/web-cricket-mania.png",
      category: "Web",
      description:
        "App to build your own cricket team and strategically choose players. Allowed to further edit and delete players",
      techstack: "React JS, Supabase",
      links: {
        visit: "",
        code: "https://github.com/swethagumpena/Cricket-Mania",
        video: "",
      },
    },
    {
      name: "Event Finder Dashboard",
      image: "/assets/projects/web-event-dashboard.png",
      category: "Web",
      description:
        "Displays events that are provided by SeatGeek and allows the user to search for events, filter by location and sort by old/new",
      techstack: "React JS, Charts",
      links: {
        visit: "",
        code: "https://github.com/swethagumpena/EventFinderX-Dashboard",
        video: "",
      },
    },
    {
      name: "Brainteasers",
      image: "/assets/projects/web-brainteasers.png",
      category: "Web",
      description: "Brainteasers quiz in a flashcard format",
      techstack: "React JS",
      links: {
        visit: "",
        code: "https://github.com/swethagumpena/brainteasers",
        video: "",
      },
    },
    {
      name: "Music player",
      image: "/assets/projects/mobile-music-player.png",
      category: "Mobile",
      techstack: "Android studio, Java",
      description:
        "Two android apps, a music service and a client. User can use the client app to play a song, resume a song, pause a song or stop a song",
      links: {
        visit: "",
        code: "https://github.com/swethagumpena/Oscar-Tunes",
        video: "",
      },
    },
    {
      name: "Three men's morris game",
      image: "/assets/projects/mobile-three-men-morris.png",
      category: "Mobile",
      techstack: "Android studio, Java",
      description:
        "Android app that shows threading in the form of a Three Men Morris game. The UI thread displays the game and updates the board. The worker threads will wait for a short time, determine the next move, communicate with the UI thread, and wait for the opponent's move",
      links: {
        visit: "",
        code: "https://github.com/swethagumpena/Three-Men-Morris",
        video: "",
      },
    },
    {
      name: "City explorer",
      image: "/assets/projects/mobile-city-attractions.png",
      category: "Mobile",
      techstack: "Android studio, Java",
      description:
        "Suite of two Android apps designed to help users plan their next vacation to either Orlando or New York City. CityChooser, allows users to choose between the two cities and broadcasts an intent to the second app, CityDetails, which responds by showing information about tourist attractions in the selected city",
      links: {
        visit: "",
        code: "https://github.com/swethagumpena/City-Explorer",
        video: "",
      },
    },
    {
      name: "Graph Isomorphism",
      image: "/assets/projects/graph-isomorphism.png",
      category: "Distributed Computing",
      description:
        "Detect traceability links between original and perturbed graphs using several map-reduce jobs and produce essential statistics such as accuracy, precision, etc",
      techstack: "Scala, Hadoop Map/Reduce, AWS EMR",
      links: {
        visit: "",
        code: "https://github.com/swethagumpena/NetGameSim_441",
        video: "https://youtu.be/50KQO4YUv-4",
      },
    },
    {
      name: "Graphs MiTM Attack",
      image: "/assets/projects/graph-mitm.png",
      category: "Distributed Computing",
      description:
        "Simulates data flow and interactions in network graphs, featuring a Man-in-the-Middle attack simulation to evaluate security vulnerabilities and defense strategies",
      techstack: "Scala, Spark, AWS EMR",
      links: {
        visit: "",
        code: "https://github.com/swethagumpena/Graphs_MitM_Attack",
        video: "https://youtu.be/BpMLJzGaZjY",
      },
    },
    {
      name: "Policeman Thief Graph Game",
      image: "/assets/projects/graph-policeman-thief.png",
      category: "Distributed Computing",
      description:
        "Cloud-based, graph-oriented chase game where players take roles as Policemen or Thieves featuring a RESTful API using Akka-HTTP and strategic gameplay",
      techstack: "Scala, Akka HTTP, AWS EMR",
      links: {
        visit: "",
        code: "https://github.com/swethagumpena/Policeman-Thief-Graph-Game",
        video: "https://youtu.be/Xr3ByXa3yWk",
      },
    },
  ];

  const categories = [...Array.from(new Set(projects.map((s) => s.category)))];

  const [category, setCategory] = useState(categories[0]);

  const [filteredProjects, setFilteredProjects] = useState(
    projects as project[]
  );
  const [viewAll, setViewAll] = useState(false);

  const filterProjects = (cat: string) => {
    setViewAll(false);
    setCategory(cat);
    setFilteredProjects(
      projects.filter(
        (p: project) => p.category.toLowerCase() === cat.toLowerCase()
      )
    );
  };

  // useEffect(() => {
  //   filterProjects(
  //     categories.includes("MERN Stack") ? "MERN Stack" : categories[0]
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <SectionWrapper
      id="projects"
      className="mx-4 md:mx-0 min-h-screen bg-gray-100 opacity-80 dark:from-grey-900 dark:to-grey-900"
    >
      <h2 className="text-4xl text-center">Projects</h2>

      <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-gray-100 opacity-80 dark:from-grey-900 dark:to-grey-900 p-2 rounded-md">
        {categories.map((c: string = "", i: number) => (
          <span
            key={i}
            onClick={() => filterProjects(c)}
            className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${
              category.toLowerCase() === c.toLowerCase()
                ? "bg-blue-600 dark:bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 hover:bg-gray-100 hover:dark:bg-gray-900"
            } cursor-pointer transition-all`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {filteredProjects
          .slice(0, viewAll ? filteredProjects.length : 6)
          .map((p: project, i: number) => (
            <ProjectCard key={i} {...p} />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;

type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export const ViewAll = ({
  handleClick,
  title,
  scrollTo,
}: {
  handleClick: MouseEventHandler;
  title: string;
  scrollTo: string;
}) => {
  return (
    <>
      <div className="pt-12 bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
      <div className="text-center -translate-y-24">
        <Link
          to={scrollTo}
          className={`bg-violet-600 text-white px-4 ${
            title === "View All" ? "animate-bounce" : "animate-none"
          } cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
          offset={-60}
          smooth={true}
          duration={500}
          // @ts-ignore
          onClick={() => handleClick()}
        >
          {title}
        </Link>
      </div>
    </>
  );
};
