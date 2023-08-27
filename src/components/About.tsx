import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-[90vh] pt-12 bg-gradient-to-b from-white to-gray-300/20 dark:from-grey-900 dark:to-grey-900"
    >
      <h2 className="text-4xl text-center">About Me</h2>
      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-2 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16">
          <Image
            alt="profile"
            width={1000}
            height={1000}
            loading={"lazy"}
            className="w-full h-60 md:h-80 rounded-2xl object-cover bg-blue-100"
            src="/swetha.jpg"
          />
          <span className="font-medium font-sans">{"👩🏻‍💻"}</span>
        </div>

        <div className="flex-1 text-left mx-3 mt-4 md:mt-0 md:mx-0 md:p-6">
          <div className="flex flex-col gap-2.5">
            <p className="text-3xl font-semibold">Swetha Gumpena</p>
            <p className="text-blue-900 w-fit rounded py-1 px-2 text-sm dark:text-blue-600 bg-blue-50 dark:bg-violet-900/10">
              Developer
            </p>
            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">
              I am a developer based in Chicago, USA. I am currently pursuing my
              Masters in Computer Science from the University of Illinois,
              Chicago. I am passionate about building highly functional and
              robust applications from a user-centered approach, and I am
              constantly pushing myself to learn and grow as a developer.
            </p>
            <div className="flex items-center gap-4 md:mt-4">
              <Link
                href={
                  "https://drive.google.com/file/d/1-9-Qv1quR31lwTwYlOr49eEYMQp-cQLN/view?usp=drive_link"
                }
                target="_blank"
                className="text-sm md:text-base bg-blue-800 dark:bg-blue-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
