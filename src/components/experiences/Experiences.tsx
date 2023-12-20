import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Link } from "react-scroll";
import SectionWrapper from "../SectionWrapper";

const Experiences = () => {
  const [show, setShow] = useState("Employment");
  const [viewAll, setViewAll] = useState(false);

  const employment = [
    {
      company: "University of Illinois Chicago",
      logo: "/assets/experience/uic.jpeg",
      position: "Graduate Software Developer",
      duration: "Feb 2023 - Present",
      location: "Chicago, IL, USA",
      desc: ["Skills: Flutter(Dart), Java, C#, .Net, MySQL"],
    },
    {
      company: "McKinsey & Company",
      logo: "/assets/experience/mck.jpeg",
      position: "Front-end Engineering Intern",
      duration: "May 2023 - July 2023",
      location: "Chicago, IL, USA",
      desc: ["Skills: React Native, ReactJS"],
    },
    {
      company: "McKinsey & Company",
      logo: "/assets/experience/mck.jpeg",
      position: "Full-stack Engineer",
      duration: "Aug 2021 - July 2022",
      location: "Bangalore, KA, India",
      desc: [
        "Skills: ReactJS, React Native, Redux, Twilio Conversations, VueJS, Google Maps Platform",
      ],
    },
    {
      company: "McKinsey & Company",
      logo: "/assets/experience/mck.jpeg",
      position: "Full-stack Engineering Intern",
      duration: "Feb 2021 - July 2021",
      location: "Bangalore, KA, India",
      desc: ["Skills: ReactJS, NodeJS, Docker"],
    },
    {
      company: "Samsung Research Institute",
      logo: "/assets/experience/samsung.jpeg",
      position: "Deep Learning Intern",
      duration: "Jan 2020 - Aug 2020",
      location: "Bangalore, KA, India",
    },
  ];

  const education = [
    {
      institute: "University of Illinois Chicago",
      logo: "/assets/experience/uic.jpeg",
      location: "Chicago, IL, USA",
      degree: "MSc Computer Science",
      duration: "2022 - 2024",
      desc: [
        "GPA: 3.8/4",
        "Coursework: Computer Algorithms, User Interface Design & Programming, Introduction to Data Science, Android Application Development, UX Research Methods",
      ],
    },
    {
      institute: "BMS College of Engineering",
      logo: "/assets/experience/bmsce.jpeg",
      location: "Bangalore, KA, India",
      degree: "B.E. Electronics & Communication",
      duration: "2017 - 2021",
      desc: [
        "GPA: 9.62/10",
        "Coursework: Data Structures & Algorithms, Object Oriented Programming using C++, Operating Systems, Discrete Mathematics, Embedded Systems, Networking",
      ],
    },
  ];

  return (
    <SectionWrapper
      id="experience"
      className="min-h-screen bg-gray-100 opacity-80"
    >
      <h2 className="text-4xl text-center">Experience</h2>

      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/4 mx-auto mt-6 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
        {["Employment", "Education"].map((e, i) => (
          <span
            key={i}
            onClick={() => setShow(e)}
            className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${
              show === e
                ? "bg-blue-600 dark:bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 hover:bg-gray-100 hover:dark:bg-gray-900"
            } cursor-pointer transition-all`}
          >
            {e}
          </span>
        ))}
      </div>

      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

          {viewAll
            ? (show === "Employment" ? employment : education).map((e, i) => (
                // @ts-ignore
                <ExperienceCard key={i} {...e} index={i} />
              ))
            : (show === "Employment" ? employment : education)
                .slice(0, 2)
                .map((e, i) => (
                  // @ts-ignore
                  <ExperienceCard key={i} {...e} index={i} />
                ))}
        </div>
      </div>

      {(show === "Employment" ? employment : education).length > 2 && (
        <ViewAll
          scrollTo="experience"
          title={viewAll ? "View Less" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
};

export default Experiences;

type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const ViewAll = ({
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
      <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
      <div className="text-center -translate-y-24">
        {title === "View All" ? (
          <button
            onClick={handleClick}
            className={`bg-blue-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } py-1.5 rounded-md hover:shadow-xl transition-all`}
          >
            {title}
          </button>
        ) : (
          <Link
            to={scrollTo}
            className={`bg-blue-600 text-white px-4 ${
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
        )}
      </div>
    </>
  );
};
