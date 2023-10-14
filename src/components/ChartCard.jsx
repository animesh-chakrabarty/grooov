import React from "react";
import { Link } from "react-router-dom";

const ChartCard = ({ chart }) => {
  console.log(chart);

  // console.log(chart?.songCount)
  // console.log(chart?.title)

  return (
    <Link to={`/charts/${chart?.id}`}>
      <div className="h-[190px] w-[190px] max-md:h-[175px] max-md:w-[175px] group relative max-xl:ml-3">
        <div className="absolute flex items-center justify-center h-[100%] w-[100%]  ">
          <button className="bg-white opacity-80 px-2 py-1 text-xl group-hover:flex hidden">
            View
          </button>
        </div>
        <img
          src={chart?.image[2]?.link}
          alt=""
          className="object-contain h-[100%] w-[100%] rounded-lg"
        />
      </div>
    </Link>
  );
};

export default ChartCard;
