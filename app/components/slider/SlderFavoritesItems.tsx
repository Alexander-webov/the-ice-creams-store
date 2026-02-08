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
          >
            <div className="flex justify-center">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={240}
                height={245}
                className="w-full"
              />
            </div>
            <div className="flex justify-between mt-3 font-bold items-start mb-3 min">
              <h2 className="max-w-[150px]">{item.title}</h2>
              <div className="flex items-center gap-1">
                <Image
                  src={iconStart}
                  alt={"start"}
                  width={13}
                  height={13}
                  className="w-[13px] h-[13px]"
                />
                {item.rating}
              </div>
            </div>
            <h3 className=" text-[#646464] mb-3">{item.description}</h3>
            <div className="flex justify-between items-center">
              <div className="text-[#F83D8E] font-bold text-2xl ">
                ${item.price.toFixed(2)}
              </div>
              <ButtonAddToCart item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
