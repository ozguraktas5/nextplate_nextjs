"use client";

import React from "react";
import { ButtonOutline } from "../ButtonOutline";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-5 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold">
          The Ultimate Starter Template You Need To Start Your Next Project
        </h1>
        <p>
          Nextplate is a free starter template built with Next and TailwindCSS,
          providing everything you need to jumpstart your Next project and save
          valuable time.
        </p>
        <div className="text-center">
          <ButtonOutline text="Get Started For Free" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
