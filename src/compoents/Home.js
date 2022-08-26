import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
export default function Home() {
  return (
    <>
      <div
        name="home"
        className="/ h-screen / w-full bg-gradient-to-b from-black to-gray-800"
      >
        <div className="/ max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 text-white">
          <div className="/ flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:7xl font-bold text-white max-w-md / text-center md:text-start">I'm a frontend React Developer </h1>
            <p className="text-gray-400 py-4 max-w-md text-center md:text-start">
              I have an 4 years of experience of buiding and designing software.
              Currently,I love to work on web applicationa using technologies
              like React Js,Tailwind Css and Boostrap.
            </p>
            <div>
              <Link to="porfolio" smooth duration={500} className="group text-white  md:ml-0 w-fit px-6 py-3 md:my-2 flex items-center rounded-md / bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
                Porfolio
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                </span>
              </Link>
            </div>
          </div>

          <div className="">
            <img src={heroImage} alt="hero-image" className="h-40 rounded-2xl / w-64  md:w-full / / mt-0 md:mt-0 md:h-64"></img>
          </div>
        </div>
      </div>
    </>
  );
}
