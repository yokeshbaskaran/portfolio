import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { socialMediaLinks } from "../data/db";

const linkedinURL = socialMediaLinks[0].linkURL;
const githubURL = socialMediaLinks[1].linkURL;

const SocialLinks = () => {
  return (
    <>
      <div className="social">
        <ul className="w-1/2 py-1 flex items-start justify-start gap-6 text-xl">
          <span>
            <a href={linkedinURL} target="_blank">
              <FaLinkedinIn />
            </a>
          </span>
          <span>
            <a href={githubURL} target="_blank">
              <IoLogoGithub />
            </a>
          </span>
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
