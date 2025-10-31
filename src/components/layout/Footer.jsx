import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content mt-10">
      <div className="items-center grid-flow-col">
        <p>
          © {new Date().getFullYear()} Liberation War Archive. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
