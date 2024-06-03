import Footer from "@/app/components/footer";
import Navigation from "@/app/components/mainNavigation";

import image from "../../../public/Side Image.png";
import Image from "next/image";

// Images of Services
import serviceOne from "../../../public/Services.png";
import serviceTwo from "../../../public/call.png";
import serviceThree from "../../../public/garantee.png";

export default function About() {
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
    <div className="h-full">
      <div className="w-[85%] mx-auto h-full">
        <Navigation />
        <div className="mt-10 font-bold">
          <span className="text-gray-500">Home</span>/
          <span className="text-black font-bold">About</span>
        </div>
        <div className="flex items-center justify-between w-full  lg:flex-row md:flex-row flex-col">
          <div className="flex  flex-col items-center justify-center lg:flex-row md:flex-row mt-10 gap-10">
            <div className="lg:w-[50%] md:w-[50%] w-full flex flex-col">
              <h1 className="text-5xl font-bold">Our Story</h1>
              <div className="mt-10 ">
                <p className="lg:text-xl md:text-md text-md">
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.
                  <br />
                  <br />
                  <br />
                  <br />
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
            </div>
            <div className="lg:w-[50%] md:w-[50%] w-full">
              <Image src={image} alt="side Iamge" className="w-full" />
            </div>
          </div>
        </div>
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
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
