import { FaCode } from "react-icons/fa6";
import profileImg from "../../public/images/profile.png";
import SocialLinks from "../components/SocialLinks";
import About from "../components/About";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const motionFun = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const imgMotion = (duration: number) => ({
  initial: { y: -30 },
  animate: {
    y: [18, -18],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

const Home = () => {
  return (
    <div className="bg-mainBgCol">
      <section className="w-[90%] mx-auto min-h-[78vh] max-md:min-h-[60vh] max-md:py-8 p-3 flex justify-center items-center gap-5 max-md:flex-col max-md:gap-14">
        <div className=" overflow-hidden w-2/3 max-md:w-full p-2 text-white flex flex-col justify-center items-start gap-4">
          <motion.h2
            variants={motionFun(0)}
            initial="hidden"
            animate="visible"
            className="text-7xl max-md:text-6xl font-semibold"
          >
            Hi, I am
            <span className="font-extrabold text-mainTextCol"> YOKESH B</span>
          </motion.h2>
          <motion.div
            variants={motionFun(1)}
            initial="hidden"
            animate="visible"
            className="capitalize text-xl relative"
          >
            <span className="text-mainTextCol text-2xl absolute">
              <FaCode />
            </span>
            <p className="indent-8 text-gray-200">
              A passionate Software Developer {"\u{1F680}"} having an experience
              of building Web applications with JavaScript, Reactjs and Nodejs.
            </p>
          </motion.div>

          <motion.div
            variants={motionFun(0.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            <SocialLinks />
            <button className="resume-btn px-4 py-3 bg-mainTextCol rounded-lg text-black text-lg hover:shadow-none">
              <Link to="https://drive.google.com/file/d/1i1sDWXLnoY6YEZ5dsccJ0rIOcsCtZX41/view?usp=drive_link">
                See My Resume
              </Link>
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-1/3 max-md:w-[95%]"
        >
          <motion.div
            variants={imgMotion(2.5)}
            initial="initial"
            animate="animate"
            className="w-[85%] mx-auto border-[3px] border-white  rounded-full "
          >
            <img src={profileImg} alt="profile-image" />
          </motion.div>
        </motion.div>
      </section>

      <main className="bg-secBgCol">
        <About />
      </main>
    </div>
  );
};

export default Home;
