import { MdSchool, MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface ExperienceProps {
  index: number;
  company: string;
  logo: string;
  position: string;
  location: string;
  desc: string[];
  institute: string;
  degree: string;
  duration: string;
}

const ExperienceCard = ({
  index,
  company,
  logo,
  position,
  location,
  desc,
  institute,
  degree,
  duration,
}: ExperienceProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { x: index % 2 === 0 ? 20 : -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div
      className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${
        index % 2 === 0 ? "md:flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div className="order-1 md:w-5/12"></div>

      <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 bg-blue-200 rounded-full ring-4 md:ring-8 ring-white dark:ring-grey-800 dark:bg-blue-900">
        {company && (
          <MdWork className="text-base md:text-xl text-blue-600 dark:text-blue-400" />
        )}
        {institute && (
          <MdSchool className="text-base md:text-xl text-blue-600 dark:text-blue-400" />
        )}
      </span>

      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="order-1 rounded-lg w-full ml-3 md:ml-0 bg-white dark:bg-grey-800 md:w-5/12 p-3 md:px-4 md:py-4"
      >
        <div className="flex items-center">
          <div className="mr-2">
            <Image alt="logo" width={20} height={20} src={logo} />
          </div>
          <h3 className="font-medium text-lg md:text-xl">
            {company || institute}
          </h3>
        </div>

        {location && <p className="text-sm text-gray-400 ml-7">{location}</p>}
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-2 ml-7">
          {position || degree} | {duration}
        </p>
        <ul className="text-sm text-gray-400 mt-2 list-disc ml-7">
          {desc &&
            desc.map((d, i) => (
              <li key={i} className="mb-0.5">
                {d}
              </li>
            ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
