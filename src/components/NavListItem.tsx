import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/db.js";

// interface NavListItemProps {
//   isNavOpen: boolean;
//   setIsNavOpen?: (isOpen: boolean) => void;
// }

export const NavListItem = () => {
  const [selected, setSelected] = useState(navLinks[0]?.linkName);

  return (
    <>
      {navLinks.map((nav, index) => (
        <NavItem
          key={index}
          text={nav.linkName}
          linkURLName={nav.linkURL}
          selected={selected === nav.linkName}
          setSelected={setSelected}
        />
      ))}
    </>
  );
};

interface NavItemProps {
  text: string;
  linkURLName: string;
  selected: boolean;
  setSelected: (T: string) => void;
}

export const NavItem = ({
  text,
  linkURLName,
  selected,
  setSelected,
}: NavItemProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-black"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-all duration-75 px-2.5 py-1 rounded-md relative`}
    >
      <Link to={`/${linkURLName}`}>
        <span className="relative z-10 text-lg">{text}</span>
      </Link>

      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-mainTextCol from-100% rounded-md"
        ></motion.span>
      )}
    </button>
  );
};
