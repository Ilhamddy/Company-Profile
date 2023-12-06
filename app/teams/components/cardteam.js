import Image from "next/image";
import React from "react";

const CardTeam = ({ team, team2 }) => {
  return (
    <div className=" rounded-lg shadow-2xl  md:mx-10">
      <div className="my-4 overflow-hidden rounded shadow-lg">
        <Image
          className="w-full"
          src={team.picture.large}
          alt="Sunset in the mountains"
          width={200}
          height={200}
          quality={100}
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">
            {team.name.first} {team.name.last}
          </div>
          <p className="text-justify text-base text-gray-700">
            Whether you're a startup or an established enterprise, FulfillXpress
            scales with your business. Easily adapt to changing order volumes
            without compromising efficiency.
          </p>
          <p>{team.nat}</p>

          <p>{team.phone}</p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            CEO
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            COO
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            CTO
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
