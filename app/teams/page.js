import React from "react";
import CardTeam from "./components/cardteam";
import { baseUrl } from "@/utils/config";

const Teams = async () => {
  const response = await fetch(`${baseUrl}`, { cache: "no-store" });
  const { results } = await response.json();

  // console.log(results);

  return (
    <section className=" py-10">
      <h1 className="my-10 flex justify-center p-5 text-center text-5xl font-extrabold md:text-start">
        Teams
      </h1>
      <div className="mx-2 grid grid-cols-1 sm:grid-cols-3 md:mx-0 ">
        {results.map((team, index) => {
          return <CardTeam key={index} team={team} />;
        })}
      </div>
    </section>
  );
};

export default Teams;
