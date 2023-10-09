import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default Card;
