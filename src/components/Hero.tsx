"use client";
import Image from "next/image";
import wavingHand from "../../public/waving-hand.gif";
import SectionWrapper from "../components/SectionWrapper";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <SectionWrapper
      id="home"
      className="mx-4 md:mx-0 min-h-screen bg-gray-100 opacity-80 dark:from-grey-900 dark:to-grey-900"
    >
      <div className="absolute -z-10 min-h-screen h-full w-full">
        <Image
          src="/herobg.jpg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className="object-bottom"
          quality={100}
          alt={""}
        />
      </div>
      <div className="py-20 lg:py-56 flex flex-col lg:flex-row justify-around gap-10 lg:gap-0">
        <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/2 mx-4 md:mx-6 xl:mx-0">
          <div className="flex items-center gap-1">
            <Image
              unoptimized={true}
              alt="waving-hand"
              width={30}
              height={30}
              src={wavingHand}
            />
            <p className="text-lg md:text-xl mt-2 md:mt-1.5">Hey</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold relative">
            I&apos;m Swetha Gumpena
          </h1>
          <div className="flex flex-row items-start md:items-center gap-1.5">
            <h2 className="text-lg md:text-2xl">I am into</h2>
            <TypewriterComponent
              options={{
                strings: [
                  "Frontend development",
                  "Backend development",
                  "App development",
                  "Designing",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                wrapperClassName:
                  "text-blue-600 dark:text-blue-600 text-lg md:text-2xl font-medium",
                cursorClassName:
                  "text-blue-600 dark:text-blue-600 text-lg md:text-2xl",
              }}
            />
          </div>

          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300">
            I focus on building highly functional, robust, user-friendly
            applications that meet the client requirements, with attention to
            detail, scability and performance
          </p>
        </div>

        <div className="relative mx-auto lg:mx-0 mt-12 md:mt-16 lg:mt-0">
          <div className="w-66 h-66 md:w-80 md:h-80 lg:-translate-x-16 relative">
            <div className="absolute w-full h-full bg-blue-200 rounded-full"></div>
            <Image
              alt="avatar"
              width={1000}
              height={1000}
              className="rounded-full w-full h-full object-cover relative z-10"
              src="/sg-bitmoji.png"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
