import Footer from "@/app/components/footer";
import Navigation from "@/app/components/mainNavigation";
import imageOne from "../../../public/icons-phone.png";
import imageTwo from "../../../public/icons-mail.png";
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <div className="w-[85%] mx-auto h-full">
        <Navigation />
        <div className="mt-10 font-bold">
          <span className="text-gray-500">Home</span>/
          <span className="text-black font-bold">Contact</span>
        </div>
        <div className="flex items-center lg:justify-between md:justify-between w-full gap-6 lg:flex-row md:flex-row flex-col mt-24 lg:h-full md:h-full h-full">
          <div className="flex items-center justify-center flex-col lg:w-[20%] md:w-[40%] w-full gap-10">
            <div className="flex items-start justify-between w-full flex-col gap-3">
              <div className="flex items-center justify-between gap-5">
                <Image src={imageOne} alt="imageOne" />
                <p>Call To US</p>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="w-full h-[1px] rounded-xl bg-slate-400"></div>
            <div className="flex items-start justify-between w-full flex-col gap-3">
              <div className="flex items-center justify-between gap-5">
                <Image src={imageTwo} alt="imageOne" />
                <p>Write To US</p>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
              <p></p>
            </div>
          </div>
          <div className="lg:w-[80%] md:w-[60%] w-full flex flex-col items-center justify-center gap-10">
            <input
              type="name"
              name=""
              id=""
              placeholder="Your Name *"
              className="boarder-black w-full h-[40px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="name"
              name=""
              id=""
              placeholder="Your Email *"
              className="boarder bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[40px]"
            />
            <input
              type="name"
              name=""
              id=""
              placeholder="Your Phone *"
              className="boarder bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[40px]"
            />
            <textarea
              name="text"
              id=""
              placeholder="Your Message"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[200px] "
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
