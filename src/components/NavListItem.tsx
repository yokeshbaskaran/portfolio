import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/db.js";

interface NavListItemProps {
  isNavOpen?: boolean;
  setIsNavOpen?: (isOpen: boolean) => void;
}

export const NavListItem = ({ isNavOpen, setIsNavOpen }: NavListItemProps) => {
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
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
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
  isNavOpen?: boolean;
  setIsNavOpen?: (isOpen: boolean) => void;
}

export const NavItem = ({
  text,
  linkURLName,
  selected,
  setSelected,
  isNavOpen,
  setIsNavOpen,
}: NavItemProps) => {
  return (
    <>
      <Link to={`/${linkURLName}`}>
        <button
          onClick={() => {
            setSelected(text);
            setIsNavOpen?.(!isNavOpen);
          }}
          className={`${
            selected
              ? "text-black active:text-mainTextCol"
              : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
          } transition-all duration-75 px-2.5 py-1 rounded-md relative`}
        >
          <span className="relative z-10 text-lg">{text}</span>

          {selected && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-mainTextCol from-100% rounded-md"
            ></motion.span>
          )}
        </button>
      </Link>
    </>
  );
};
