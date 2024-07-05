//todo : isse optimize kar map vali functionality lagakr
import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
    return (
        <div className="w-[20%] h-full  border-r-2 border-zinc-400 p-10">
            <h1 className="text-2xl text-white font-bold">
            <div className="flex ">
            <img className="  w-[54px] h-auto m-0.5"
            alt="Netflix Icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png
            " />
                <span className="text-4xl mt-3">Netflix</span></div>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-2xl mt-10 mb-5">
                <div className="hidden md:block">  New feeds</div>
                </h1>
                <Link
            to="/trending"
            className="flex items-center space-x-2 hover:bg-[#6556CD] hover:text-white duration-400 rounded-lg p-2 md:p-5"
        >
            <i className="ri-fire-fill text-4xl sm:text-3xl md:text-2xl lg:text-xl"></i>
            <div className="hidden  md:flex">Trending</div>
        </Link>
                <Link
                    to="/popular"
                    className="hover:bg-[#6556CD] hover:text-white duration-400 rounded-lg p-0 md:p-5"
                >
                    <i className="mr-2 ri-bard-fill"></i>
                    <div className="hidden md:flex"> Popular </div>
                </Link>
                <Link
                    to="/movie"
                    className="hover:bg-[#6556CD] hover:text-white duration-400 rounded-lg p-0 md:p-5"
                >
                    <i className="mr-2 ri-movie-2-fill "></i>
               <div className="hidden md:block">  </div>
                    <div className="hidden md:block">Movies</div>
                </Link>
                <Link
                    to="/tv"
                    className="hover:bg-[#6556CD] hover:text-white duration-400 rounded-lg p-5"
                >
                    <i className="mr-2 ri-tv-2-fill"></i>
                    <div className="hidden md:block"> Tv shows </div>
                </Link>
                <Link
                    to="/person"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 m-1"
                >
                    <i className="mr-2 ri-team-fill"></i>
                    <div className="hidden md:block"> People </div>
                </Link>
            </nav>
            <hr className="border-none h-[1px] bg-zinc-400" />
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">
                <div className="hidden md:block">Website info  </div>
                </h1>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                    <i className="mr-2 ri-information-fill"></i> <div className="hidden md:block"> About Us </div>
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                    <i className="mr-2 ri-phone-fill"></i>
                    <div className="hidden md:block">Contact us  </div>
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
                to="https://bhriguverma-theta.vercel.app/"
                >
                <i className="ri-github-line"></i>
                <div className="hidden md:block">Bverma  </div>
                </Link>
                <div className="text-[12px] left-0 bottom-0"> <div className="hidden md:block"> Copyright@bhriguverma </div></div>
            </nav>
        </div>
    );
};

export default Sidenav;
