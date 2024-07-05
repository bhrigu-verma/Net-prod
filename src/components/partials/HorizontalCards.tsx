import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data, title }) => {
    return (
        <div className="w-[100%] flex  overflow-y-hidden  p-3 select-none">
            {data.length > 0 ? (
                data.map((d, i) => (
                    <Link
                        to={`/${d.media_type || title}/details/${d.id}`}
                        key={i}
                        className="min-w-[72%] lg:min-w-[38%] h-[65vh]  bg-zinc-900 mr-2 lg:mr-5 mb-3"
                    >
                        <img
                            className="max-w-full h-[60%]  lg:h-[55%] object-cover"
                            src={
                                d.backdrop_path || d.poster_path
                                    ? `https://image.tmdb.org/t/p/original${
                                          d.backdrop_path || d.poster_path
                                      }`
                                    : noimage
                            }
                            alt=""
                        />
                        <div className="text-white p-3  lg:h-[45%] h-[25%]  overflow-y-auto">
                            <h1 className=" text-xl font-normal lg:font-semibold sm:font-medium ">
                                {d.name ||
                                    d.title ||
                                    d.original_name ||
                                    d.original_title}
                            </h1>
                            <div className="hidden lg:block">
                                {d.overview.slice(0, 190)}...
                                <span className="text-blue-500"> more</span>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <h1 className="text-3xl mt-5 text-white font-black text-center">
                    Nothing to show
                </h1>
            )}
        </div>
    );
};

export default HorizontalCards;
