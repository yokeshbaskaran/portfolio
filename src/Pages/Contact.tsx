import profileImg from "../../public/images/profile.png";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  return (
    <>
      <main className="  h-[85vh] py-8 bg-secBgCol text-white">
        <section className="  w-[90%] h-[70vh] mx-auto flex justify-center items-center">
          <div className="w-1/4 max-md:hidden">
            <div className="w-[85%] mx-auto border-2 border-white rounded-full ">
              <img src={profileImg} alt="profile-image" />
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center">
            <h2 className="text-5xl text-center">
              Contact <span className="text-mainTextCol font-bold">Me!</span>
            </h2>

            <div className=" ">
              <SocialLinks />
            </div>
            <button className="resume-btn px-4 py-3 bg-mainTextCol rounded-lg text-black text-lg hover:shadow-none">
              See My Resume
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
