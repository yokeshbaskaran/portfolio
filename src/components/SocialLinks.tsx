import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const SocialLinks = () => {
  return (
    <>
      <div className="social">
        <ul className="w-1/2 py-1 flex items-start justify-start gap-5">
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <IoLogoGithub />
          </span>
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
