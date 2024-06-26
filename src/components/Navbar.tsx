import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavListItem } from "./NavListItem";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsNavOpen(false);
        // console.log("srcoll value", window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavOpen]);

  return (
    <>
      <header className="w-full h-[70px] m-auto text-white flex justify-center items-center overflow-hidden">
        <nav className="w-[95%] mx-auto p-2 flex justify-center items-center text-lg">
          <h1
            onClick={() => navigate("/")}
            className="text-4xl font-medium cursor-pointer"
          >
            PortFolio.
          </h1>

          <div className="px-2 py-2 bg-mainBgCol flex items-center max-md:hidden ml-auto gap-[3vw] lg:gap-[2vw] md:gap-[1vw] text-md">
            <NavListItem />
          </div>

          {isNavOpen && (
            <div className="px-2 py-10 bg-mainBgCol flex items-center gap-10 md:hidden w-full h-[90vh] z-50 absolute top-[70px] left-0 flex-col justify-between">
              <NavListItem isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            </div>
          )}

          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="hidden max-md:block ml-auto text-2xl"
          >
            {isNavOpen ? <MdClose /> : <MdMenu />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

{
  /* <div className="q w-10">
          <section
            className={`${
              selectedMode === "light" ? "lightie" : "darkie"
            } relative yoki`}
          >
            <div className="yokii absolute top-0 right-0 overflow-hidden">
              <ThemeSlider
                selectedMode={selectedMode}
                setSelectedMode={setSelectedMode}
              />
            </div>
          </section>
        </div> */
}
