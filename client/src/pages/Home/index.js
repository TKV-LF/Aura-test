import React from "react";
import { Carousel } from "@material-tailwind/react";
import { default as BookingForm } from "../../components/Forms/Booking";
import {
  InformationArticle,
  UtilitiesArticle,
  MenuArticle,
} from "../../components/Articles";

const slides = [
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-6-normal-2253770456511.webp",
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-9-normal-2253770756514.webp",
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-1-normal-2253769856506.webp",
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-2-normal-2253769956507.webp",
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-4-normal-2253770256509.webp",
];

const menu = [
  "https://cdn.pastaxi-manager.onepas.vn/Content/Uploads/Prices/vuvu/mkkitchenbar/menu/nha-hang-mk-kitchen-bar-ben-van-don-1.jpg",
  "https://cdn.pastaxi-manager.onepas.vn/Content/Uploads/Prices/vuvu/mkkitchenbar/menu/nha-hang-mk-kitchen-bar-ben-van-don-2.jpg",
  "https://cdn.pastaxi-manager.onepas.vn/Content/Uploads/Prices/vuvu/mkkitchenbar/menu/nha-hang-mk-kitchen-bar-ben-van-don-3.jpg",
  "https://cdn.pastaxi-manager.onepas.vn/Content/Uploads/Prices/vuvu/mkkitchenbar/menu/nha-hang-mk-kitchen-bar-ben-van-don-4.jpg",
  "https://cdn.pastaxi-manager.onepas.vn/Content/Uploads/Prices/vuvu/mkkitchenbar/menu/nha-hang-mk-kitchen-bar-ben-van-don-5.jpg",
];

function Home() {
  return (
    <div className="w-full m-auto pt-5">
      <Carousel transition={{ duration: 2 }} className="rounded-xl">
        {slides.map((slide, i) => (
          <img
            src={slide}
            alt="slide"
            className="w-full object-cover max-h-[370px]"
          />
        ))}
      </Carousel>
      <div className="flex mt-5">
        <div className="w-3/4 pr-4">
          <div className="bg-white dark:bg-gray-900 rounded pb-5">
            <InformationArticle
              restaurantName="MK Kitchen & Bar - Bến Vân Đồn"
              address="Số 320 Bến Vân Đồn, P. 2, Q. 4"
              restaurantType="Nhà hàng"
              priceRange="200.000đ - 500.000đ"
              openTime="07:00"
              closeTime="23:00"
              tags={["Nhà hàng", "Bar", "Cafe"]}
            />
          </div>

          <div className="bg-white dark:bg-gray-900 rounded mt-5 pb-5">
            <UtilitiesArticle
              utilities={[
                "Máy chiếu",
                "Âm thanh - ánh sáng",
                "HĐ trực tiếp",
                "Ghế trẻ em",
                "Chỗ hút thuốc",
                "Chỗ để ô tô (miễn phí)",
                "Bàn ngoài trời",
                "Bóng đá K+",
                "Set lunch",
                "Karaoke",
                "Điều hòa",
                "Trang trí sự kiện",
                "Visa / Master card",
              ]}
            />
          </div>

          <div className="bg-white dark:bg-gray-900 rounded mt-5 pb-5">
            <MenuArticle images={menu} />
          </div>
        </div>
        <div className="w-1/4 pl-4 bg-white dark:bg-gray-900">
          <div className="bg-white dark:bg-gray-900 rounded">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
