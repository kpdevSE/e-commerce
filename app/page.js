import Image from "next/image";
import Navigation from "./components/mainNavigation";
import imageOne from "../public/main.png";
import Link from "next/link";
import ClockComponent from "./components/clock";

// Sales Images
import rectangle from "../public/Rectangle 17.png";
import games from "../public/gamingpad.png";
import keyboard from "../public/keyboard.png";
import monitor from "../public/tv.png";
import chair from "../public/gamingchair.png";

// Catergories
import phone from "../public/Category-Phone.png";
import computer from "../public/Category-Computer.png";
import watch from "../public/Category-Watch.png";
import headphone from "../public/Category-Headphone.png";
import game from "../public/Category-Game.png";

export default function App() {
  const dummyData = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "120",
      images: games,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "960",
      images: keyboard,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "120",
      images: monitor,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair ",
      price: "120",
      images: chair,
    },
  ];

  const catergories = [
    {
      id: 1,
      images: phone,
    },
    {
      id: 2,
      images: computer,
    },
    {
      id: 3,
      images: watch,
    },
    {
      id: 4,
      images: game,
    },
    {
      id: 5,
      images: headphone,
    },
  ];

  return (
    <div className="w-[85%] mx-auto h-full">
      <Navigation />

      {/* First Home Section */}
      <div className="w-full h-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-10 mt-10 flex-col-reverse justify-center items-center">
        <div className="lg:w-[30%] w-full">
          <ul className="flex flex-col items-start justify-center gap-6">
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
            <Link href={"/Watches"}>
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
            <Link href={"/Camaersa"}>
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
            <Link href={"/Headphones"}>
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
            <Link href={"/Games"}>
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
            <Link href={"/Keyboards"}>
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
          <Image src={imageOne} alt="mainImage" className="w-full h-full" />
        </div>
      </div>
      {/* End Of First Home Section */}

      {/* Second Home Section */}
      <div className="mt-24 flex flex-col gap-10">
        <div className="flex lg:items-center lg:justify-start gap-3 items-center">
          <Image src={rectangle} alt="rectangle" />
          <h1 className="text-[#DB4444] font-bold">Today&apos;s Sales</h1>
        </div>
        <ClockComponent />
        <div className="grid lg:grid-cols-4 place-items-center md:grid-cols-2 md:gap-6 mt-10">
          {dummyData.map((e) => {
            return (
              <div key={e.id}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <div className="flex items-center w-full justify-center">
                    <Image
                      className="w-[50%]"
                      src={e.images}
                      alt="Sunset in the mountains"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{e.name}</div>
                    <p className="text-gray-700 text-base font-bold">
                      ${e.price}
                    </p>

                    <div className="flex items-center justify-start mt-5">
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        4.95
                      </p>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        of
                      </p>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <button className="w-full h-[40px] text-white bg-black">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-7">
          <button className="w-[220px] h-[40px] text-white bg-[#DB4444] ">
            View all Products
          </button>
        </div>
      </div>
      {/* End OF Second Home Section */}

      <div className="bg-gray-500 w-full h-[1px] mt-16 rounded-lg"></div>

      {/* Third Home Section */}
      <div className="mt-28">
        <div className="flex lg:items-center lg:justify-start gap-3 items-center">
          <Image src={rectangle} alt="rectangle" />
          <h1 className="text-[#DB4444] font-bold">Catergories</h1>
        </div>
        <div className="flex lg:items-center lg;justify-start lg:flex-row lg:gap-10  gap-6 mt-10">
          <h1 className="lg:text-4xl lg:font-extrabold text-2xl font-extrabold">
            Browse by Catergories
          </h1>
        </div>
        <div className="grid lg:grid-cols-5 place-items-center md:grid-cols-2 md:gap-6 mt-10 gap-6">
          {catergories.map((e) => {
            return (
              <div key={e.id}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <div className="flex items-center w-full justify-center">
                    <Image
                      className="w-full"
                      src={e.images}
                      alt="Sunset in the mountains"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Of Third Home Section */}
    </div>
  );
}
