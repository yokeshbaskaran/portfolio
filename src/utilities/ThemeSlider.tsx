import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-2.5 transition-colors relative z-10";

interface ThemeSliderProps {
  selectedMode: string;
  setSelectedMode: (mode: string) => void;
}

export const ThemeSlider = ({
  selectedMode,
  setSelectedMode,
}: ThemeSliderProps) => {
  return (
    <>
      <div
        className={` ${
          selectedMode === "light" ? "lightie" : "darkie"
        } relative flex w-fit items-center rounded-full 
                ${selectedMode === "light" ? "bg-[#fde067]" : "bg-black"}`}
      >
        <button
          className={`${TOGGLE_CLASSES} ${
            selectedMode === "light" ? "text-white" : "text-[#fde067]"
          }`}
          onClick={() => {
            setSelectedMode("light");
          }}
        >
          <FiSun className="relative z-10 text-lg md:text-sm" />
          <span className="relative z-10">Light</span>
        </button>

        <button
          className={`${TOGGLE_CLASSES} ${
            selectedMode === "light" ? "text-black" : "text-white"
          }`}
          onClick={() => {
            setSelectedMode("dark");
          }}
        >
          <FiMoon className="relative z-10 text-lg md:text-sm" />
          <span className="relative z-10">Dark</span>
        </button>

        <div
          className={`absolute inset-0 z-0 flex ${
            selectedMode === "dark" ? "justify-end" : "justify-start"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
          />
        </div>
      </div>
    </>
  );
};
