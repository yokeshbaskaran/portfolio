import { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";
import { useProfileContext } from "../context/ProfileContext";
import { motionFun } from "../Pages/Home";
import { motion } from "framer-motion";

const Projects = () => {
  const { userData } = useProfileContext();
  const [repsURL, setRepsURL] = useState<string | undefined>("");

  useEffect(() => {
    if (userData && userData.repos_url) {
      setRepsURL(userData.repos_url); // Ensure repos_url is a string
    }
    // console.log(userData);
  }, [userData]);

  return (
    <>
      <main className="py-5 bg-secBgCol min-h-screen text-white">
        <motion.h2
          variants={motionFun(0)}
          initial="hidden"
          animate="visible"
          className="py-3 text-center text-5xl font-semibold uppercase"
        >
          Projects
        </motion.h2>
        {repsURL && (
          <div className="my-3 text-white">
            <ProjectItem repsURL={repsURL} />
            {userData?.repos_url && (
              <div className="my-8 text-center ">
                <a
                  className="p-5 text-xl rounded-md border-2 border-mainBgCol hover:text-black hover:bg-white shadow-lg"
                  href={userData?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Projects
                </a>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default Projects;
