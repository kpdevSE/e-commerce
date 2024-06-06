import Image from "next/image";
import Link from "next/link";

import ImageOne from "../../public/Wishlist.png";
import imageTwo from "../../public/Cart1 with buy.png";
import SidePanelComponents from "./sidepanel";

export default function Navigation() {
  return (
    <div className="w-full h-[70px] flex items-center justify-center">
      <div className="flex items-center justify-between w-full ">
        <h1 className="font-bold text-2xl">EXCLUSIVE</h1>
        <div className="hidden lg:block md:block">
          <ul className="flex items-center justify-between gap-10 =">
            <Link href={"/"}>
              <li className="font-bold">HOME</li>
            </Link>
            <Link href={"/Contact"}>
              <li className="font-bold">CONTACT</li>
            </Link>
            <Link href={"/About"}>
              <li className="font-bold">ABOUT</li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:block md:block">
          <div className="flex items-center justify-between gap-1">
            <Image
              src={ImageOne}
              alt="WishList Image"
              className="hover:cursor-pointer "
            />
            <Image
              src={imageTwo}
              alt="WishList Image"
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden md:hidden">
        <SidePanelComponents />
      </div>
    </div>
  );
}
