import React from "react";

interface ParagraphProps {
  size?: "small" | "medium" | "large";
  bold?: boolean;
  italics?: boolean;
  children?: any;
}

const Paragraph: React.FC<ParagraphProps> = ({
  size = "medium",
  bold = false,
  italics = false,
  children,
}) => {
  const textSizeClasses = {
    small: "text-base",
    medium: "text-lg",
    large: "text-xl",
  };

  const fontWeightClass = bold ? "font-bold" : "font-normal";
  const italicize = italics ? "italic" : "font-normal";

  return (
    <div>
      <p className={`${textSizeClasses[size]} ${fontWeightClass} ${italicize}`}>
        {children}
      </p>
    </div>
  );
};

export default Paragraph;
