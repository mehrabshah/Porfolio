import React from "react";
export default function Contat() {
  return (
    <>
      <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800
        p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full" >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
            <p className="py-6">Submit the form below to get in touch with one</p>
          </div>
          <div className="flex justify-center items-center">
            <form action="https://getform.io/f/df90d59e-9331-401b-a8b4-fa9de0d0bab1" method="POST" className="flex flex-col w-full md:w-1/2 ">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent bottom-2 rounded-md text-white border-white / border-2 focus:outline-none"
              />
              <input 
                 type="text"
                 name="email"
                 placeholder="Enter your name"
                 className="p-2 bg-transparent bottom-2 rounded-md text-white  border-white / border-2 focus:outline- my-4"
              
              />
              <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent bottom-2 rounded-end text-white focus:outline-none  border-white / border-2"></textarea>
              <button className="text-white / bg-gradient-to-b / from-cyan-500 to to-blue-500 
               px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">Let's Talk</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
