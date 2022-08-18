import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { useCallback, useEffect, useRef, useState } from "react";

import SvgArrowLong from "../../public/svg-components/ArrowLong2";

const CustomSwiper = (props) => {
  const { className, swiperClassName, children, withArrows = true } = props;
  const swiperRef = useRef(null);

  return (
    <div className={`relative ${className}`}>
      <Swiper
        ref={swiperRef}
        // {...params}
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={25}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className={`swiper1 ${swiperClassName}`}
      >
        {children}
      </Swiper>
      <button
        className="absolute right-0 bottom-[13.5px] z-10 text-white"
        onClick={() => {
          swiperRef && swiperRef.current.swiper.slideNext();
        }}
      >
        <SvgArrowLong fontSize="1.5em" />
      </button>
    </div>
  );
};

export default CustomSwiper;
