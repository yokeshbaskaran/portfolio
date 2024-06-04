import ExperItem from "../components/ExperItem";
import { experData } from "../data/db";
import { motionFun } from "../Pages/Home";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <section className="py-5 bg-secBgCol text-white">
        <motion.h2
          variants={motionFun(0)}
          initial="hidden"
          animate="visible"
          className="py-8 text-center text-5xl"
        >
          InternShips & Experience
        </motion.h2>

        {experData &&
          experData.map((data, index) => (
            <div>
              <ExperItem data={data} key={index} />
            </div>
          ))}
      </section>
    </>
  );
};

export default Experience;
