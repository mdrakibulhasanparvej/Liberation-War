import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`card bg-base-100 shadow-xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
