import React from "react";
import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Navigation, Autoplay, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative max-w-7xl mx-auto rounded-b-md shadow-xl overflow-hidden">
            <div className="dark:hidden dark:sm:block absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="../../public/bg.jpg"
                alt="banner Image"
              />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-28 lg:px-8 lg:pb-28">
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-center sm:text-left text-5xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl sm:ml-12"
              >
                <span className="block text-[#f1faee]">
                  Explore the Future of Technology
                  <span className="block text-indigo-300">
                    <TypewriterComponent
                      options={{
                        strings: ["Innovation.", "Gadgets."],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </span>
              </motion.h1>
              <p className="mt-6 max-w-sm mx-auto sm:ml-12 text-center sm:text-left text-lg sm:text-xl text-indigo-200 sm:max-w-2xl">
                Stay ahead with cutting-edge technology. Explore the latest
                trends, gadgets, and innovations shaping the future.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-begin">
                <div className="sm:ml-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Link
                    to="/explore"
                    className="flex items-center justify-center rounded-md border border-transparent bg-[#f1faee] px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                  >
                    Explore Now
                  </Link>
                  <Link
                    to="/examples"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-[#f1faee] shadow-sm hover:bg-opacity-70 sm:px-8"
                  >
                    View Examples
                  </Link>
                </div>
              </div>
              <div className="hidden sm:block ml-12 text-sm mt-4 text-indigo-200">
                Dive into the Future of Technology
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
