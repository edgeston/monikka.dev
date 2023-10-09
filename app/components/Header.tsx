import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">{title}</h1>
    </header>
  );
};

export default Header;
