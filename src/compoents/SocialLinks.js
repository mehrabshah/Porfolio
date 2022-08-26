import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
export default function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/mehrabshah",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:l192345@lhr.nu.edu.pk",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-0 / fixed">
        <ul>
          {links.map(links => (
            <li
              key={links.id}
              className={
                "flex w-40 / h-14 bg-gray-500 px-4 items-center justify-between ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
                "" +
                links.style
              }
            >
              <a
                href={links.href}
                className="flex w-full justify-between items-center text-white"
                download={links.download}
                target="_blank"
              >
               {links.child}
              </a>
            </li>
))}
        </ul>
      </div>
    </>
  );
}
