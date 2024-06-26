import { AcademyImg } from "../components/EducationItems";
import psg from "../../public/images/psg.png";
import svvb from "../../public/images/svvb.png";
import { coursesList } from "../data/db";
import CertifyItem from "../components/CertifyItem";
import { motionFun } from "../Pages/Home";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <>
      <main className="bg-secBgCol text-white">
        <motion.h2
          variants={motionFun(0)}
          initial="hidden"
          animate="visible"
          className="py-8 text-center font-semibold text-5xl text-mainTextCol"
        >
          Education & Certifications
        </motion.h2>
        <h2 className="py-5 text-center text-5xl">Education</h2>

        <section className="mt-5 w-[75%] max-sm:w-[95%] max-md:w-[85%] mx-auto p-3 flex max-md:flex-col gap-1 max-md:gap-5 justify-between items-center ">
          <div className="w-[30%] py-2  max-md:w-[70%] max-sm:w-[85%] overflow-hidden">
            <AcademyImg imageURL={psg} />
          </div>

          <section className="w-[70%] max-md:w-[90%] max-sm:w-[95%]  rounded-md overflow-hidden shadow-xl">
            <div className="p-5 bg-mainBgCol">
              <div className="py-1 flex flex-wrap max-md:flex-col max-md:items-start  justify-between items-center gap-2 text-md">
                <p className="text-2xl">
                  PSG College of Arts & Science (College)
                </p>
                <span>2018-2023</span>
              </div>
              <div className="py-1 flex flex-wrap max-md:flex-col max-md:items-start  justify-between items-center gap-2 text-md">
                <p className="text-lg font-semibold">
                  Master's degree in Software systems
                </p>
                <span>Coimbatore, TamilNadu</span>
              </div>
              <p className="font-semibold"></p>
            </div>

            <div className="px-3 py-5 bg-secBgCol font-light flex flex-col gap-3">
              <li>
                I have studied basic subjects like C, C++, Python, DS,
                Algorithms, DBMS, MongoDB etc.
              </li>
              <li>
                Completed one minor-project and two major-projects in the
                college.
              </li>
              <li>
                Apart from this, I have done course certifications and online
                certificates.
              </li>
            </div>
          </section>
        </section>

        <section className="mt-5 w-[75%] max-sm:w-[95%] max-md:w-[85%] mx-auto p-3 flex max-md:flex-col gap-1 max-md:gap-5 justify-between items-center ">
          <div className="  w-[30%] py-2  max-md:w-[70%] max-sm:w-[85%] overflow-hidden">
            <AcademyImg imageURL={svvb} />
          </div>

          <section className="  w-[70%] max-md:w-[90%] max-sm:w-[95%]  rounded-md overflow-hidden shadow-xl">
            <div className="p-5 bg-mainBgCol">
              <div className="py-1 flex flex-wrap max-md:flex-col max-md:items-start  justify-between items-center gap-2 text-md">
                <p className="text-2xl">
                  Sri Vijay Vidyalaya, Dharmapuri (School)
                </p>
                <span>2016-2018</span>
              </div>
              <div className="py-1 flex flex-wrap max-md:flex-col max-md:items-start  justify-between items-center gap-2 text-md">
                <p className="text-lg font-semibold">HSC & SSLC</p>
                <span>Dharmapuri, TamilNadu</span>
              </div>
              <p className="font-semibold"></p>
            </div>

            <div className="px-3 py-5 bg-secBgCol font-light flex flex-col gap-3">
              <li>Completed 10th(SSLC) With Grade 93.8% In 2016.</li>
              <li>Completed 12th(HSC) With Grade 84.9% In 2018.</li>
            </div>
          </section>
        </section>
      </main>

      <main className="py-5 pb-8 bg-secBgCol text-white">
        <h2 className="py-8 text-center text-5xl">Certifications</h2>
        <section className="w-[90%] mx-auto grid grid-cols-3 gap-3 md:gap-10 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-5">
          {coursesList &&
            coursesList.map((course, index) => (
              <CertifyItem course={course} key={index} />
            ))}
        </section>
      </main>
    </>
  );
};

export default Education;
