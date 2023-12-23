import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function Menu(props) {
  return (
    <div className="px-10 pt-5">
        <h1
            className="text-xl font-bold mb-5 dark:text-white"
            itemprop="name"
          >
            Bảng giá:
          </h1>
      <Carousel transition={{ duration: 2 }} className="rounded-xl">
        {props.images.map((slide, i) => (
          <img
            src={slide}
            alt="slide"
            className="w-full object-cover max-h-[370px]"
          />
        ))}
      </Carousel>
    </div>
  );
}
