import React from "react";
import { Link } from "react-router-dom";
import hero from "../../images/hero.png";

export const Hero = () => {
  return (
    <>
      <div className="flex p-5 flex-wrap sm:flex-nowrap">
        <img
          src={hero}
          alt="hero"
          className="w-full object-contain sm:w-1/2 h-[70vh]"
        />
        <div className="w-full self-center sm:w-1/2">
          <div className="text-center">
            <span className="text-3xl lg:text-5xl font-extrabold italic">
              Follow
            </span>
            <span className="text-sm lg:text-xl"> people around the world</span>
          </div>
          <div className="pt-2 text-center">
            <span className="text-3xl lg:text-5xl font-extrabold italic">
              Connect
            </span>
            <span className="text-sm lg:text-xl"> with your friends</span>
          </div>
          <div className="pt-2 text-center">
            <span className="text-3xl lg:text-5xl font-extrabold italic">
              Share
            </span>
            <span className="text-sm lg:text-xl"> what you're thinking</span>
          </div>
          <Link to="/signup">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-white rounded text-sm lg:text-xl mt-5 lg:mt-10 content-center block mx-auto">
              Join now
            </button>
          </Link>
          <Link to="/login">
            <p className="mt-2 text-blue-400 underline text-center lg:text-xl">
              Already have an account ?
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
