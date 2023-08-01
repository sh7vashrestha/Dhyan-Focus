import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-xs text-[#fefefe] sm:text-base py-5 flex justify-center items-center cursor-pointer align-bottom mt-auto">
      &copy;{currentYear} Shiva Shrestha. All rights reserved.
    </div>
  );
};

export default Footer;
