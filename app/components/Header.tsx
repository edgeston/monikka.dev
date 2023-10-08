import React from "react";

interface HeaderProps {
  title: string;
  sizing?: "small" | "medium" | "large"; // Define the sizing prop
}

const Header: React.FC<HeaderProps> = ({ title, sizing }) => {
  let textSizeClass = "";
  switch (sizing) {
    case "small":
      textSizeClass = "text-sm";
      break;
    case "medium":
      textSizeClass = "text-base";
      break;
    case "large":
      textSizeClass = "text-lg";
      break;
    default:
      textSizeClass = "text-base";
      break;
  }

  return (
    <header>
      <h1
        className={`text-base sm:text-lg md:text-xl lg:text-2xl ${textSizeClass}`}
      >
        {title}
      </h1>
    </header>
  );
};

export default Header;
