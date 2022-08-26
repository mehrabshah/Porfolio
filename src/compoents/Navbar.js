import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";
export default function Navbar() {
  const [Nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "porfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="flex  bg-black w-screen h-20 / items-center px-4 text-white / justify-between">
        <div>
          <h1 className="/ font-signature / text-5xl ml-2 text-white">
            Mehrab
          </h1>
        </div>
        <ul className=" hidden md:flex">
          {links.map((links) => (
            <li
              key={links.id}
              className="px-4 cursor-pointer capitalize / font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={links.link} smooth duration={500}>{links.link}</Link>

            </li>
          ))}
        </ul>
        <div
          className="/ cursor-pointer md:hidden pr-4 z-10 text-gray-500"
          onClick={() => setNav(!Nav)}
        >
          {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
     {Nav && (<ul className="flex flex-col h-screen w-full bg-black absolute top-0 left-0 justify-center items-center bg-gradient-to-b
      from-black to-gray-800 text-gray-500q">
        {links.map((links) => (
          <li
            key={links.id}
            className="px-4  py-6 text-4xl cursor-pointer capitalize text-white"
          >
            <Link onClick={()=>setNav(!Nav)} to={links.link} smooth duration={500}>{links.link}</Link>
          </li>
        ))}
      </ul>)}
    </>
  );
}
