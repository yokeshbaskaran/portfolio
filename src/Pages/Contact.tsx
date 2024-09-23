import profileImg from "../../public/images/profile.png";
import SocialLinks from "../components/SocialLinks";
import { motionFun } from "../Pages/Home";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <main className="  h-[85vh] py-8 bg-secBgCol text-white">
        <section className="  w-[90%] h-[70vh] mx-auto flex justify-center items-center gap-8">
          <div className="w-1/4 max-md:hidden">
            <div className="w-[85%] mx-auto border-2 border-white rounded-full ">
              <img src={profileImg} alt="profile-image" />
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center">
            <motion.h2
              variants={motionFun(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl text-center font-semibold"
            >
              Contact <span className="text-mainTextCol">Me!</span>
            </motion.h2>

            <div className=" ">
              <SocialLinks />
            </div>

            <button className="resume-btn px-4 py-3 bg-mainTextCol rounded-lg text-black text-lg hover:shadow-none">
              <Link to="https://drive.google.com/file/d/1i1sDWXLnoY6YEZ5dsccJ0rIOcsCtZX41/view?usp=drive_link">
                See My Resume
              </Link>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
