"use client";
import React from "react";
import { useGetAllJokesQuery } from "@/redux/allJokesApi";

const AllJokes = () => {
  const { data, error, isLoading } = useGetAllJokesQuery();

  return (
    <div className="main flex items-center justify-center align">

    <div className="border-indigo-400 w-[500px] h-[500px] border-4 rounded mt-48 flex flex-col justify-between">
      <div className="intro">
        <h1 className="text-blue-600 text-xl">Get Funny Random Jokes Here</h1>
      </div>
      <div className="jokes">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3 className="font-semibold">{data.setup}</h3>
            <h3 className="font-semibold">{data.delivery}</h3>
            <h3 className="font-semibold">{data.category}</h3>

          </>
        ) : null}
      </div>
      <button className="border-indigo-400 bg-indigo-400 my-40">
        More Jokes
      </button>
    </div>

    </div>
  );
};

export default AllJokes;
