import { motion } from "framer-motion";
import { motionFun } from "../Pages/Home";
import { ImageContainer, ImageSlot } from "../utilities/ImageSlot";

interface TechStack {
  stackName: string;
  stackImage: string; // Assuming stackImage is a string (URL or path to the image)
}

interface ExperItemProps {
  roleName: string;
  duration: string;
  companyName: string;
  companyLocation: string;
  workType: string;
  workDescription: string[];
  techStacks: TechStack[];
}

interface ExperProps {
  data: ExperItemProps;
}

const ExperItem: React.FC<ExperProps> = ({ data }: ExperProps) => {
  return (
    <>
      <main className="w-[90%] p-5 md:w-[75%] mx-auto">
        <motion.section
          variants={motionFun(0.75)}
          initial="hidden"
          animate="visible"
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <div className="p-5 bg-mainBgCol">
            <div className="py-1 flex flex-wrap max-md:flex-col max-md:items-start  justify-between items-center text-md">
              <p className="text-2xl text-mainTextCol uppercase">
                {data.roleName}
              </p>
              <span className="uppercase">{data.duration}</span>
            </div>

            <div className="py-1 flex flex-wrap max-md:flex-col max-md:items-start  justify-between items-center text-md">
              <p className="font-semibold">{data.companyName}</p>
              <span>
                {data.companyLocation} {`(${data.workType})`}
              </span>
            </div>
          </div>

          <div className="px-3 py-5 bg-secBgCol font-light flex flex-col gap-3">
            {data.workDescription.map((des, index) => (
              <li key={index}>{des}</li>
            ))}
            <div className="p-3">
              <h2 className="text-lg font-medium text-mainTextCol opacity-60">
                Tech Stack used:
              </h2>
              <ImageContainer>
                {data.techStacks.map((stack, index) => (
                  <ImageSlot
                    key={index}
                    imgName={stack.stackName}
                    imageURL={stack.stackImage}
                  />
                ))}
              </ImageContainer>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default ExperItem;
