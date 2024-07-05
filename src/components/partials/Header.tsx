import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
    // console.log(data);
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
                    data.backdrop_path || data.profile_path
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="max-w-full  h-[60vh] md:h-[70vh] flex flex-col justify-end items-start p-[3%] select-none"
        >
            <h1 className="w-[70%] lg:text-5xl md:text-4xl sm:text-4xl text-2xl  font-black text-white">
                {data.name ||
                    data.title ||
                    data.original_name ||
                    data.original_title}
            </h1>
            <p className="w-[60%] mt-3  text-white">
              <div className="lg:block hidden">{data.overview.slice(0, 180)}...</div>  
                <Link
                    to={`/${data.media_type}/details/${data.id}`}
                    className="text-blue-600"
                >
                    read more
                </Link>
            </p>
            <p className="text-zinc-200  ">
                <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
                {data.release_date || "No Information"}
                <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
                {data.media_type.toUpperCase()}
            </p>
            <Link
                to={`/${data.media_type}/details/${data.id}/trailer`}
                className="mt-5 bg-[#6556CD] text-xl md:text-2xl p-[4px] md:p-[14px] rounded text-zinc-300 hover:bg-purple-800 font-medium md:font-semibold duration-700"
            >
                Watch Trailer
            </Link>
        </div>
    );
};

export default Header;
