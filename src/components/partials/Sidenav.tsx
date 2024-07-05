//todo : isse optimize kar map vali functionality lagakr
import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
    return (
        <div className="md:w-[20%] w-[16%] h-full  border-r-2 border-zinc-400 p-5">
            <h1 className="text-2xl text-white font-bold">
            <div className="flex ">
            <img className=" hidden md:flex w-[55px] h-[53px] m-0.5"
            alt="Netflix Icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png
            " />
                <span className="text-4xl mt-3 hidden md:flex ">Netflix</span></div>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-2">
            <h1 className="text-white font-semibold text-2xl mt-10 mb-5">
                <div className="hidden md:block">What we offer</div>
            </h1>
            <Link
                to="/trending"
                className="flex items-center space-x-2 md:hover:bg-[#6556CD] hover:text-white duration-400 rounded-lg   md:p-5"
            >
                <i className="ri-fire-fill text-4xl rounded-lg hover:bg-[#6556CD] p-[3px] sm:text-3xl md:text-2xl lg:text-xl"></i>
                <div className="hidden md:flex">Trending</div>
            </Link>
            <Link
                to="/popular"
                className="flex items-center space-x-2 md:hover:bg-[#6556CD] hover:text-white duration-400 rounded-lg   md:p-5"
            >
                <i className="ri-bar-chart-fill text-4xl rounded-lg hover:bg-[#6556CD] p-[3px] sm:text-3xl md:text-2xl lg:text-xl"></i>
                <div className="hidden md:flex">Popular</div>
            </Link>
            <Link
                to="/movie"
                className="flex items-center space-x-2 md:hover:bg-[#6556CD] hover:text-white duration-400 rounded-lg   md:p-5"
            >
                <i className="ri-movie-2-fill text-4xl rounded-lg hover:bg-[#6556CD] p-[3px] sm:text-3xl md:text-2xl lg:text-xl"></i>
                <div className="hidden md:flex">Movies</div>
            </Link>
            <Link
                to="/tv"
                className="flex items-center space-x-2 md:hover:bg-[#6556CD] hover:text-white duration-400 rounded-lg   md:p-5"
            >
                <i className="ri-tv-2-fill text-4xl rounded-lg hover:bg-[#6556CD] p-[3px] sm:text-3xl md:text-2xl lg:text-xl"></i>
                <div className="hidden md:flex">TV Shows</div>
            </Link>
            <Link
                to="/person"
                className="flex items-center space-x-2 md:hover:bg-[#6556CD] hover:text-white duration-400 rounded-lg   md:p-5"
            >
                <i className="ri-team-fill text-4xl rounded-lg hover:bg-[#6556CD] p-[3px] sm:text-3xl md:text-2xl lg:text-xl"></i>
                <div className="hidden md:flex">People</div>
            </Link>
        </nav>
           
            <hr className="border-none h-[1px] bg-zinc-400 hidden md:block" />
            <nav className="flex flex-col text-zinc-400 text-xl gap-3 ">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">
                <div className="hidden md:block">Website info  </div>
                </h1>
                <Link className=" flex items-center space-x-2 md:hover:bg-[#6556CD] md:hover:text-white duration-300 rounded-lg  ">
                    <i className="mr-2 ri-information-fill text-4xl rounded-lg hover:bg-[#6556CD] p-[3px] sm:text-3xl md:text-2xl lg:text-xl "></i> <div className="hidden md:block"> About Us </div>
                </Link>
               
                <Link className="flex items-center space-x-2 md:hover:bg-[#6556CD] md:hover:text-white duration-300 rounded-lg  "
                to="https://bhriguverma-theta.vercel.app/"
                >
                <i className="ri-github-line text-4xl rounded-lg hover:bg-[#6556CD]   sm:text-3xl md:text-2xl lg:text-xl"></i>
                <div className="hidden md:block">Bverma  </div>
                </Link>
                <div className="text-[12px] left-0 bottom-0"> <div className="hidden md:block"> Copyright@bhriguverma </div></div>
            </nav>
        </div>
    );
};

export default Sidenav;
