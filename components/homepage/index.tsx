"use client";

import React from "react";
import { ButtonOutline } from "../ButtonOutline";
import Image from "next/image";
import bannerImage from "../../public/images/banner.png";
import service1 from "../../public/images/service-1.png";
import service2 from "../../public/images/service-2.png";
import service3 from "../../public/images/service-3.png";
import { CarouselSize } from "../CarouselSize";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center gap-40">
      <section className="flex flex-col gap-4 mt-5 text-center max-w-4xl mx-auto">
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
        <div>
          <Image src={bannerImage} alt="bannerImage" width={800} height={800} />
        </div>
      </section>

      <section className="flex items-center gap-20 bg-slate-50 w-screen px-40 py-28">
        <Image src={service1} alt="service1" width={500} height={500} />
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold">What's Included in Nextplate</h2>
          <p className="text-xl">
            Nextplate is a comprehensive starter template that includes
            everything you need to get started with your Next project. What's
            Included in Nextplate
          </p>
          <ul className="text-lg flex flex-col gap-2">
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              10+ Pre-build page
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              95+ Google Pagespeed Score
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              Build with Next and TailwindCSS for easy and customizable styling
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              Fully responsive on all devices
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              SEO-optimized for better search engine rankings
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              <span className="font-bold">Open-source and free for</span>{" "}
              personal and commercial use
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-row-reverse items-center gap-20">
        <Image src={service2} alt="service2" width={500} height={500} />
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold">
            Discover the Key Features Of Next
          </h2>
          <p className="text-xl">
            Next is an all-in-one web framework for building fast,
            content-focused websites. It offers a range of exciting features for
            developers and website creators. Some of the key features are:
          </p>
          <ul className="text-lg flex flex-col gap-2">
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              Zero JS, by default: No JavaScript runtime overhead to slow you
              down.
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              Customizable: Tailwind, MDX, and 100+ other integrations to choose
              from.
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              UI-agnostic: Supports React, Preact, Svelte, Vue, Solid, Lit and
              more.
            </li>
            <div>
              <ButtonOutline text="Get Started" />
            </div>
          </ul>
        </div>
      </section>

      <section className="flex items-center gap-20 bg-slate-50 w-screen px-40 py-28">
        <div>
          <Image src={service3} alt="service3" width={500} height={500} />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold">
            The Top Reasons to Choose Next for Your Next Project
          </h2>
          <p className="text-xl">
            With Next, you can build modern and content-focused websites without
            sacrificing performance or ease of use.
          </p>
          <ul className="text-lg flex flex-col gap-2">
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              Instantly load static sites for better user experience and SEO.
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              Intuitive syntax and support for popular frameworks make learning
              and using Next a breeze.
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              Use any front-end library or framework, or build custom
              components, for any project size.
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              Built on cutting-edge technology to keep your projects up-to-date
              with the latest web standards.
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-8 mt-5 text-center max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl lg:text-5xl font-bold">
            What Users Are Saying About Nextplate
          </h2>
          <p>
            Don't just take our word for it - hear from some of our satisfied
            users! Check out some of our testimonials below to see what others
            are saying about Nextplate.
          </p>
        </div>
        <div className="mx-auto">
          <CarouselSize />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
