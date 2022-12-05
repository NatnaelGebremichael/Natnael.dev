import type { NextPage } from "next";
import Head from "next/head";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import profile from "../public/images/profile.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {Experiance} from "../data/data"
const Home: NextPage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div id="root">
      <div className="flex min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <Head>
          <meta
            name="google-site-verification"
            content="TIUrkchOlm9fPiQ_hEfy-3--R5cBqUlVtCsHjhS6tkI"
          />

          <title>Nati Web</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navigation Bar*/}
        <nav className="w-full px-6 z-50 fixed insert-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 p-4 rounded-2xl flex items-center bg-navBar">
            <p className="text-lg text-slate-200 font-medium">
              Natnael Gebremichael
            </p>
            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                {" "}
                Home
              </a>
              <a
                href="#About"
                className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                {" "}
                About
              </a>
              <a
                href="#Projects"
                className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                {" "}
                Projects
              </a>
              <a
                href="#Contacts"
                className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                {" "}
                Contacts
              </a>
              <a
                href="#"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1
              rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              >
                Download
              </a>
            </div>
            <div
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase" />
            </div>

            {isActive && (
              <div
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center 
            justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  {" "}
                  Home
                </a>
                <a
                  href="#About"
                  className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  {" "}
                  About
                </a>
                <a
                  href="#Projects"
                  className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  {" "}
                  Projects
                </a>
                <a
                  href="#Contacts"
                  className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  {" "}
                  Contacts
                </a>
                <a
                  href="#"
                  className="
                onClick={() => setIsActive(false)}text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1
              rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </a>
              </div>
            )}
          </div>
        </nav>

        <div
          className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20"
          id="home"
        >
          <Spline scene="https://prod.spline.design/0zePFgYYBpN7GtSq/scene.splinecode" />

          <div className="absolute bottom-10 w-full justify-center items-center flex">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
              <p className="text-white "> Press and drag to orbit </p>
            </div>
          </div>
        </div>

        {/* main Sections*/}
        <main className="w-[80%] mt-5">
          {/** About Section */}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            {/**Image Box */}
            <div className="w-full h-42 flex items-center justify-center">
              <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
                <Image
                  className="w-full h-full absolute -right-4 top-4 object-cover
                  rounded-lg shadow-lg"
                  src={profile}
                  alt="profilePic"
                ></Image>
              </div>
            </div>

            {/**Content Box */}
            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                illo doloribus ad. Laborum tempora quia sequi aliquid quisquam
                laudantium ea saepe excepturi, quasi eum inventore
                exercitationem iure, voluptates nam consequuntur! Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Fuga illo
                doloribus ad. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Laboriosam vero perspiciatis id animi. Alias in vero hic.
              </p>

              <button
                className="w-full md:w-auto relative mt-6 inline-flex items-center 
              justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium
               text-gray-900 rounded-lg group bg-gradient-to-br from-green-400
                to-blue-600 group-hover:from-green-400 group-hover:to-blue-600
                 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200
                  dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50
                   hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
              >
                <span
                  className="w-full md:w-auto relative px-5 py-2.5 transition-all 
                    ease-in duration-75 bg-white dark:bg-gray-900 rounded-md 
                    group-hover:bg-opacity-0"
                >
                  Download
                </span>
              </button>
            </div>
          </section>

          {/** Time Line */}
          <section className="w-full flex items-center justify-center">
            <VerticalTimeline className="">
              {Experiance &&
                Experiance.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21,24,31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21,24,31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21,24,31)", color: "#888" }}
                    icon={n.iconSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>
                      {n.description}
                    </p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
