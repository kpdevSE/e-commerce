import Image from "next/image";
import Navigation from "./components/mainNavigation";
import imageOne from "../public/main.png";
import imageTwo from "../public/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import Link from "next/link";
import ClockComponent from "./components/clock";

// Sales Images
import rectangle from "../public/Rectangle 17.png";
import games from "../public/gamingpad.png";
import keyboard from "../public/keyboard.png";
import monitor from "../public/tv.png";
import chair from "../public/gamingchair.png";

// Catergories Images
import phone from "../public/Category-Phone.png";
import computer from "../public/Category-Computer.png";
import watch from "../public/Category-Watch.png";
import headphone from "../public/Category-Headphone.png";
import game from "../public/Category-Game.png";

// This Month Images
import coat from "../public/suite.png";
import bag from "../public/handbag.png";
import cpu from "../public/cpucooler.png";
import cupboard from "../public/cupboard.png";

// Our Products Images
import snacks from "../public/snacks.png";
import newCamare from "../public/cameranew.png";
import laptop from "../public/laptop.png";
import cream from "../public/cream.png";
import car from "../public/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png";
import shoes from "../public/shoes.png";
import gamingConsole from "../public/console.png";
import jacket from "../public/jacket.png";

// New Arrivals Images
import playStation from "../public/playstation.png";
import women from "../public/women.png";
import speakers from "../public/speakers.png";
import perfume from "../public/perfume.png";

// Images of Services
import serviceOne from "../public/Services.png";
import serviceTwo from "../public/call.png";
import serviceThree from "../public/garantee.png";
import Footer from "./components/footer";

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

  const thisMonth = [
    {
      id: 1,
      name: "The North Coat",
      price: "120",
      images: coat,
    },
    {
      id: 2,
      name: "GUCCI Duffle Bag",
      price: "750",
      images: bag,
    },
    {
      id: 3,
      name: "RGB Liquid CPU Cooler",
      price: "1200",
      images: cpu,
    },
    {
      id: 4,
      name: "Small Bookself ",
      price: "560",
      images: cupboard,
    },
  ];

  const ourProducts = [
    {
      id: 1,
      name: "Breed Dry Dog Foods",
      price: "120",
      images: snacks,
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: "750",
      images: newCamare,
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "1200",
      images: laptop,
    },
    {
      id: 4,
      name: "Curology Product Set ",
      price: "560",
      images: cream,
    },
    {
      id: 5,
      name: "Kids Electric Car(New Arrived)",
      price: "120",
      images: car,
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: "750",
      images: shoes,
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: "1200",
      images: gamingConsole,
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: "560",
      images: jacket,
    },
  ];

  const services = [
    {
      id: 1,
      topic: "FREE AND FAST DELIVERY",
      secondTopic: "Free delivery for all orders over $140",
      images: serviceOne,
    },
    {
      id: 2,
      topic: "24/7 CUSTOMER SERVICE",
      secondTopic: "Friendly 24/7 customer support",
      images: serviceTwo,
    },
    {
      id: 3,
      topic: "MONEY BACK GUARANTEE",
      secondTopic: "We reurn money within 30 days",
      images: serviceThree,
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[85%] mx-auto h-full">
        <Navigation />

        {/* First Home Section */}
        <div className="w-full h-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-10 mt-10 flex-col-reverse justify-center items-center">
          <div className="lg:w-[30%] w-full">
            <ul className="flex flex-col items-start justify-center gap-6">
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
          <div className="grid lg:grid-cols-5 place-items-center md:grid-cols-2 md:gap-6 mt-24 gap-6">
            {catergories.map((e) => {
              return (
                <div key={e.id}>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="flex items-center w-full justify-center hover:cursor-pointer">
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

        <div className="bg-gray-500 w-full h-[1px] mt-24 rounded-lg"></div>

        {/* Forth Home Section */}
        <div className="mt-24 flex flex-col gap-10">
          <div className="flex lg:items-center lg:justify-start gap-3 items-center">
            <Image src={rectangle} alt="rectangle" />
            <h1 className="text-[#DB4444] font-bold">This Month</h1>
          </div>
          <div className="flex lg:items-center lg;justify-between w-full lg:flex-row lg:gap-10  gap-6 mt-8 flex-col">
            <h1 className="lg:text-4xl lg:font-extrabold text-2xl font-extrabold">
              Browse by Catergories
            </h1>
            <button className="w-[180px] h-[40px] text-white bg-[#DB4444] ">
              Show Products
            </button>
          </div>
          <div className="grid lg:grid-cols-4 place-items-center md:grid-cols-2 md:gap-6 mt-10 place-content-center">
            {thisMonth.map((e) => {
              return (
                <div key={e.id} className="w-full">
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
        </div>
        {/* End of Fourth Home Section */}

        {/* Fifth Hoome Section */}
        <div className="mt-44 flex lg:flex-row lg:items-center lg:justify-between w-full flex-col items-center justify-center gap-8">
          <div className="lg:w-[50%] w-full flex lg:items-start lg:justify-start flex-col gap-11 justify-center items-center">
            <h2 className="text-[#2dbb5c] font-bold text-2xl">Catergories</h2>
            <h1 className="lg:text-7xl font-bold md:text-5xl lg:text-left text-center text-4xl">
              Enhance Your <br /> Music Experience
            </h1>
            <button className="bg-[#00FF66] w-[130px] h-[50px] font-bold text-white rounded-md">
              Buy Now
            </button>
          </div>
          <div className="lg:w-[40%] md:w-[60%] w-[85%]">
            <Image
              src={imageTwo}
              alt="Second Background Image"
              className="w-full"
            />
          </div>
        </div>
        {/* End of Fifth Home Section */}

        {/* Six Home Section */}

        <div className="mt-56 flex flex-col gap-10">
          <div className="flex lg:items-center lg:justify-start gap-3 items-center">
            <Image src={rectangle} alt="rectangle" />
            <h1 className="text-[#DB4444] font-bold">Our Products</h1>
          </div>
          <div className="flex lg:items-center lg;justify-between w-full lg:flex-row lg:gap-10  gap-6 mt-8 flex-col">
            <h1 className="lg:text-4xl lg:font-extrabold text-2xl font-extrabold">
              Explore Our Products
            </h1>
            <button className="w-[180px] h-[40px] text-white bg-[#DB4444] ">
              Show Products
            </button>
          </div>
          <div className="grid lg:grid-cols-4 place-items-center md:grid-cols-2 md:gap-6 mt-10 place-content-center gap-5">
            {ourProducts.map((e) => {
              return (
                <div key={e.id} className="w-full">
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
        </div>

        {/* End Of Six Home Section */}

        <div className="bg-gray-500 w-full h-[1px] mt-24 rounded-lg"></div>

        {/* Seventh Home Section */}
        <div className="mt-28">
          <div className=" flex flex-col gap-10">
            <div className="flex lg:items-center lg:justify-start gap-3 items-center">
              <Image src={rectangle} alt="rectangle" />
              <h1 className="text-[#DB4444] font-bold">Features</h1>
            </div>
            <div className="flex lg:items-center lg;justify-between w-full lg:flex-row lg:gap-10  gap-6 mt-8 flex-col">
              <h1 className="lg:text-4xl lg:font-extrabold text-2xl font-extrabold">
                New Arrivals
              </h1>
            </div>
          </div>
          <div className="w-full flex lg:flex-row lg:items-center lg:justify-between flex-col items-center justify-center mt-24 gap-6">
            <div className="lg:w-[50%] w-full">
              <Image src={playStation} alt="play station" className="w-full" />
            </div>
            <div className="lg:w-[50%] w-full flex items-center justify-center gap-5 flex-col">
              <Image src={women} alt="women" className="w-full" />
              <div className="flex lg:flex-row lg:item-center lg:justify-between w-full  gap-3">
                <div className="lg:w-[50%] w-full">
                  <Image src={speakers} alt="speakers" className="w-full" />
                </div>
                <div className="lg:w-[50%] w-full">
                  <Image src={perfume} alt="perfume" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Of Seventh Home Section */}

        {/* Eight Home Section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 place-content-center place-items-center mt-24">
          {services.map((e) => {
            return (
              <div
                key={e.id}
                className="flex items-center justify-center flex-col gap-4"
              >
                <Image src={e.images} alt="images" />
                <div className="flex items-center justify-center flex-col">
                  <h1 className="font-bold">{e.topic}</h1>
                  <h2>{e.secondTopic}</h2>
                </div>
              </div>
            );
          })}
        </div>
        {/* End Of Eight Home Section */}
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
