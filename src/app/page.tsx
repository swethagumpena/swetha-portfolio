import Image from "next/image";
import HomePage from "./HomePage";

export default function page() {
  return (
    <>
      {true ? (
        <HomePage />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-blue-900 fixed z-30 bg-gray-100 dark:bg-grey-900">
          <Image
            src="/sg-logo.png"
            width={100}
            height={100}
            className="animate-pulse"
            quality={100}
            alt={""}
          />
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}
