"use client";
import NavbarItem from "./NavbarItem";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Menu = [
  {
    id: 0,
    name: "Podcasts",
    link: "/",
  },
  {
    id: 1,
    name: "Host",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/",
  },
  {
    id: 3,
    name: "Blog",
    link: "/",
  },
  {
    id: 4,
    name: "Contact",
    link: "/",
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-3 relative">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link href={"/"} className="text-4xl font-bold">
              &#123;PODVEET
            </Link>
          </div>
          <div>
            <button className="block md:block lg:hidden" onClick={toggleNavbar}>
              <CiMenuBurger fontSize={30} />
            </button>
            <ul
              className={`${
                isMenuOpen
                  ? "absolute flex flex-col right-0 top-20 gap-5 bg-black  text-white w-full"
                  : "hidden lg:flex gap-4"
              }`}
            >
              {Menu.map((item) => (
                <NavbarItem key={item.id} link={item.link} name={item.name} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
