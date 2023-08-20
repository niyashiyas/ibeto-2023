import React from "react";
import useState from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const opening = () => {
    setOpen(!open);
  };

  const [dopen, setDopen] = React.useState(false);
  const [dopen1, setDopen1] = React.useState(false);

  const dopening = () => {
    setDopen(!dopen);
    setDopen1(false);
  };

  const dopening1 = () => {
    setDopen1(!dopen1);
    setDopen(false);
  };

  return (
    <header className="fixed rounded-b-[13%] w-full z-50 bg-gradient-to-b from-[#95b3f9] to-[#deb4ff] sm:bg-gradient-to-b sm:from-[#092a7e] sm:to-[#8698fa]">
      <div className="absolute min-w-7xl inset-0">
        <img
          className="object-cover w-full h-full opacity-30"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>{" "}
      <div className="px-0 py-1 sm:px-0 mx-auto sm:max-w-6xl 2xl:max-w-7xl">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between lg:justify-end h-20 lg:h-18">
            <div className="lg:absolute lg:-translate-x-1 flex justify-center items-center lg:inset-y-5 lg:left-1">
              <div className="flex-shrink-0">
                <Link href="/" title="" className="flex">
                  <img
                    className="w-auto h-7 lg:h-16"
                    src="https://ibeto.excelmec.org/static/media/excellogowithtext.5937280d5965b8c122a0.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            {!open ? (
              <button
                onClick={opening}
                type="button"
                className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 focus:text-black hover:text-black hover:bg-gray-100"
              >
                <svg
                  className="block w-6 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={opening}
                className="inline-flex p-2 px-4 text-white font-bold transition-all duration-200 rounded-md lg:hidden focus:bg-[#0b0a26] hover:text-white hover:bg-gray-100"
              >
                X
              </button>
            )}
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              {/* <Link
                href="/about"
                title=""
                className="text-base font-medium text-white"
              >
                {" "}
                About Us{" "}
              </Link> */}
              {/* <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-white"
              >
                Programs
              </Link> */}
              {/* <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-white"
              >
                Donate
              </Link>
              <Link
                href="/volunteer"
                title=""
                className="text-base font-body font-medium text-white"
              >
                Volunteer
              </Link> */}
              {/* <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-white"
              >
                Collaboration
              </Link> */}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md text-base font-body font-medium px-4 py-2 text-white  "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    About
                  </button>
                </div>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md text-base font-body font-medium px-4 py-2 text-white  "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    About
                  </button>
                </div>
              </div>{" "}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md text-base font-body font-medium px-4 py-2 text-white  "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    About
                  </button>
                </div>
              </div>{" "}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md text-base font-body font-medium px-4 py-2 text-white  "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    About
                  </button>
                </div>
              </div>{" "}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md text-base font-body font-medium px-4 py-2 text-white  "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    About
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
    </header>
  );
};

export default Navbar;