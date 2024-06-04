import { FaCode } from "react-icons/fa6";
import profileImg from "../../public/images/profile.png";
import SocialLinks from "../components/SocialLinks";
import About from "../components/About";

const Home = () => {
  return (
    <div className="bg-mainBgCol">
      <section className="w-[90%] mx-auto min-h-[75vh] max-md:min-h-[60vh] max-md:py-8 p-3 flex justify-center items-center gap-5 max-md:flex-col max-md:gap-8">
        <div className=" overflow-hidden w-2/3 max-md:w-full p-2 text-white flex flex-col justify-center items-start gap-4">
          <h2 className="text-7xl max-md:text-6xl font-semibold">
            Hi, I am
            <span className="font-extrabold text-mainTextCol"> YOKESH B</span>
          </h2>
          <div className="capitalize text-xl relative">
            <span className="text-mainTextCol text-2xl absolute">
              <FaCode />
            </span>
            <p className="indent-8 text-gray-200">
              A passionate Software Developer {"\u{1F680}"} having an experience
              of building Web applications with JavaScript, Reactjs and Nodejs.
            </p>
          </div>
          <div className="w-full">
            <SocialLinks />
          </div>
          <button className="resume-btn px-4 py-3 bg-mainTextCol rounded-lg text-black text-lg hover:shadow-none">
            See My Resume
          </button>
        </div>
        <div className="w-1/3 max-md:w-[85%]">
          <div className="w-[85%] mx-auto border-2 border-white  rounded-full ">
            <img className="" src={profileImg} alt="profile-image" />
          </div>
        </div>
      </section>

      <main className="bg-secBgCol">
        <About />
      </main>
    </div>
  );
};

export default Home;
