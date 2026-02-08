"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { Product } from "@prisma/client";
import Image from "next/image";
//Components
import ButtonAddToCart from "../ui/ButtonAddToCart";
//Images
import iconStart from "@/public/icons/start.png";

function Slider({ items }: { items: Product[] }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="sliderFavorites max-w-[1000px] mb-10"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-white rounded-2xl min-h-[415px] h-full p-4 flex flex-col justify-between"
          ></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
