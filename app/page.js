import Image from "next/image";
import Navigation from "./components/mainNavigation";
import imageOne from "../public/main.png";
import Link from "next/link";

export default function App() {
  return (
    <div className="w-[85%] mx-auto h-full">
      <Navigation />
      <div className="w-full h-full lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-10 mt-10 flex-col-reverse justify-center items-center">
        <div className="lg:w-[30%] w-full">
          <ul className="flex flex-col items-center justify-center gap-6">
            <Link href={"/Phones"}>
              <div className="flex items-center justify-between gap-9 w-[200px]">
                <li className="font-bold">PHONES</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
            <Link href={"/Computers"}>
              <div className="flex items-center justify-between gap-9 w-[200px]">
                <li className="font-bold">COMPUTERS</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
            <Link href={"/Computers"}>
              <div className="flex items-center justify-between gap-9 w-[200px]">
                <li className="font-bold">SMART WATCHES</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
            <Link href={"/Computers"}>
              <div className="flex items-center justify-between gap-9 w-[200px]">
                <li className="font-bold">CAMERAS</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
            <Link href={"/Computers"}>
              <div className="flex items-center justify-between gap-9 w-[200px]">
                <li className="font-bold">HEADPHONES</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
            <Link href={"/Computers"}>
              <div className="flex items-center justify-between gap-9 w-[200px]">
                <li className="font-bold">GAMES</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
            <Link href={"/Computers"}>
              <div className="flex items-center justify-between gap-9 w-[200px]">
                <li className="font-bold">KEYBOARDS & MOUSE</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
          </ul>
        </div>
        <div className="lg:w-[70%] w-full flex items-center justify-center mt-8 lg:mt-0">
          <Image src={imageOne} alt="mainImage" />
        </div>
      </div>
    </div>
  );
}
