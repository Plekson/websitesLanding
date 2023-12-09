"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

type Props = {
  links: {
    link: string;
    text: string;
  }[];
};

const Menu = (props: Props) => {
  const { links } = props;
  const navigationRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const displayMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const isOutsideClick =
      navigationRef.current &&
      !navigationRef.current.contains(event.target as Node);
    const isHamburgerClick = (event.target as HTMLElement)?.id === "hamburger";
    if (isOutsideClick && !isHamburgerClick) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative">
      <div
        className="w-8 h-8 sm:hidden cursor-pointer z-10"
        onClick={displayMenu}
        id="hamburger"
      >
        <Bars3Icon />
      </div>
      <div
        className={`flex sm:flex-row gap-8 flex-col sm:static absolute top-16 text-center w-screen sm:w-auto  duration-200 bg-white ${
          isOpen ? "right-0" : "-right-[100vw]"
        }`}
        ref={navigationRef}
      >
        {links.map((linkObj, index) => (
          <a
            key={index}
            href={linkObj.link}
            className="text-lg hover:scale-105 hover:text-neutral-500 duration-200 font-bold"
            onClick={() => setIsOpen(false)}
          >
            {linkObj.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
