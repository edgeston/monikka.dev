import React from "react";

interface ParagraphProps {
  size?: "small" | "medium" | "large";
  bold?: boolean;
  children?: any;
}

const Paragraph: React.FC<ParagraphProps> = ({
  size = "medium",
  bold = false,
  children,
}) => {
  const textSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const fontWeightClass = bold ? "font-bold" : "font-normal";

  return (
    <div>
      <p className={`${textSizeClasses[size]} ${fontWeightClass}`}>
        {children}
      </p>
    </div>
  );
};

export default Paragraph;
