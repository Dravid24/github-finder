import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { GrInstagram, GrLinkedin } from "react-icons/gr";

const Footer = () => {
  const openLinkInNew = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="fixed bottom-0 w-full">
      <footer className="bg-gray-700 ">
        <div className=" container px-4 mx-auto py-6 md:flex md:items-center md:justify-between">
          <div className="text-sm text-white text-center">
            &copy; 2022 Dravid R. All Rights Reserved.
          </div>
          <div className="flex mt-4 space-x-6 justify-center md:mt-0">
            <div
              onClick={() =>
                openLinkInNew("https://facebook.com/dravid.manigandan")
              }
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              <FaFacebook size={20} />

              <span className="sr-only">Facebook page</span>
            </div>
            <div
              onClick={() =>
                openLinkInNew("https://www.instagram.com/dravidmanigandan/")
              }
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <GrInstagram size={23} />
              </svg>
              <span className="sr-only">Instagram page</span>
            </div>
            <div
              onClick={() =>
                openLinkInNew("https://www.linkedin.com/in/dravid2407/")
              }
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              <GrLinkedin size={20} />
              <span className="sr-only">Linkedin page</span>
            </div>
            <div
              onClick={() => openLinkInNew("https://github.com/Dravid24")}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              <FaGithub size={20} />
              <span className="sr-only">GitHub account</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
