import React from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Aos from "aos";


export default function Sponsors() {
  return (
    <div id="sponsors">
      <video
        autoPlay
        loop
        muted
        className="absolute -mt-12 z-0 opacity-[15%] h-screen w-full object-cover max-w-none"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <section className="py-16 -mt-12  bg5 bg-[#2c0a1c] sm:py-18 lg:py-24 xl:py-28">
        <div className="px-4 mx-auto  max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center sm:text-center">
              {/* <p className="text-base font-normal text-white sm:text-lg">Lorem ipsum dolor sit amet{" "}</p> */}
              <h2
                data-aos="fade-down"
                className="mt-9 font-body2 text-3xl font-normal text-white sm:mt-6 sm:text-4xl lg:text-5xl"
              >
                Collaborators{" "}
              </h2>
            </div>

            <hr className="mt-8 border-rose-800/0 sm:mt-12" />
            <div
              data-aos="flip-right"
              className="flex mb-8 w-full justify-center"
            >
              <div className="inline-grid grid-cols-1 gap-8 mb-5 mt-8 sm:gap-x-12 sm:gap-y-10 sm:grid-cols-4 sm:mt-12">
                <div className="flex justify-center gap-2 flex-col w-full">
                  <img
                    className="collaborator__img"
                    src="./careerLauncher.png"
                    alt="cl"
                  />
                  <h2 className="sponsor__name">
                    Career Launcher{" "}
                  </h2>
                </div>
                {/* <div className="flex justify-center gap-2 flex-col ">
                  <img
                    className="object-contain h-8 max-w-full sm:h-10 w-32 sm:w-44"
                    src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-logoipsum.svg"
                    alt=""
                  />
                  <h2 className="text-sm font-body1 text-center font-medium text-white">
                    Tinkerhub{" "}
                  </h2>
                </div> */}
                {/* <div className="flex justify-center gap-2 flex-col ">
                  <img
                    className="object-contain h-8 max-w-full sm:h-10 w-32 sm:w-44"
                    src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-alterbone.svg"
                    alt=""
                  />
                  <h2 className="text-sm font-body1 text-center font-medium text-white">
                    Tinkerhub{" "}
                  </h2>
                </div> */}
                {/* <div className="flex justify-center gap-2 flex-col ">
                  <img
                    className="object-contain h-8 max-w-full sm:h-10 w-32 sm:w-44"
                    src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-carbonia.svg"
                    alt=""
                  />
                  <h2 className="text-sm font-body1 text-center font-medium text-white">
                    Tinkerhub{" "}
                  </h2>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
