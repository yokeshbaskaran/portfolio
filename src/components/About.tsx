import { FaCode } from "react-icons/fa6";
import { ImageContainer, ImageSlot } from "../utilities/ImageSlot";
import html from "../../public/logo/html.png";
import css from "../../public/logo/css.png";
import js from "../../public/logo/js.png";
import react from "../../public/logo/react.png";
import node from "../../public/logo/node.png";
import vscode from "../../public/logo/vscode.png";
import git from "../../public/logo/git.png";
import github from "../../public/logo/github.png";
import android from "../../public/logo/android.png";

const About = () => {
  return (
    <>
      <main className="w-[90%] mx-auto py-8 text-white grid grid-cols-4 gap-4 text-lg">
        <section className="col-span-4">
          <h2 className="m-2 mb-8 text-white text-center text-5xl font-semibold">
            About
            <span className="text-mainTextCol"> Me!</span>
          </h2>
          <div className="m-2 capitalize text-xl relative">
            <span className="text-mainTextCol text-2xl absolute">
              <FaCode />
            </span>
            <p className="indent-10 text-gray-200 tracking-widest text-justify text-2xl">
              A Developer who wants to build responsive projects. And expertise
              in HTML, CSS, JavaScript, React, and Node.js. Strong Foundation in
              web development technologies like HTML, CSS and JavaScript.
            </p>
          </div>
          <div className="m-2 capitalize text-xl relative">
            <span className="text-mainTextCol text-2xl absolute">
              <FaCode />
            </span>
            <p className="indent-10 text-gray-200 tracking-widest text-justify text-2xl">
              And also
            </p>
          </div>
        </section>

        <section className="w-full col-span-2 max-md:col-span-4 max-md:p-3">
          <h2 className="text-center my-8 text-mainTextCol text-4xl font-bold">
            Tech Stack
          </h2>

          <div>
            <h2 className="text-xl font-medium">Languages known:</h2>
            <ImageContainer>
              <ImageSlot imgName="HTML" imageURL={html} />
              <ImageSlot imgName="css" imageURL={css} />
              <ImageSlot imgName="js" imageURL={js} />
              <ImageSlot imgName="react" imageURL={react} />
              <ImageSlot imgName="node" imageURL={node} />
            </ImageContainer>
          </div>

          <div className="pt-5">
            <h2 className="text-xl font-medium ">Tools & Technolgies:</h2>
            <ImageContainer>
              <ImageSlot imgName="git" imageURL={git} />
              <ImageSlot imgName="Github" imageURL={github} />
              <ImageSlot imgName="VSCode" imageURL={vscode} />
              <ImageSlot imgName="Android" imageURL={android} />
            </ImageContainer>
          </div>
        </section>

        <section className="w-full col-span-2 max-md:col-span-4 max-md:p-1">
          <h2 className="text-center my-8 text-mainTextCol text-4xl font-bold">
            What I Do?
          </h2>
          <div>
            <ol className="list-des text-justify tracking-wide text-xl flex gap-5 flex-col">
              <li>
                With a keen eye for design and a love for crafting seamless user
                experiences, I thrive on turning ideas into beautifully
                functional websites and web applications.
              </li>
              <li>
                Familiar with building responsive webites for different devices
                and Designing highly attractive user interface for web
                applications
              </li>
              <li>
                Develops interactive Front end / User Interfaces (UI) in the web
                applications
              </li>
            </ol>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
