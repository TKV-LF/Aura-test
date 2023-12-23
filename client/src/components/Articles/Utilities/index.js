export default function Utilities(props) {
  const utilities = [
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
    "Hóa đơn VAT",
    "Wifi",
    "Chỗ chơi trẻ em",
    "Đặt ship PasGo",
    "MC dẫn chương trình",
    "Phòng riêng",
  ];

  const dontHave = utilities.filter(
    (utility) => !props.utilities.includes(utility)
  );

  return (
    <div className="px-10 pt-2">
      <h1
            className="text-xl font-bold mt-5 dark:text-white"
            itemprop="name"
          >
            Tiện ích:
          </h1>
      <div className="flex flex-wrap">
        {props.utilities.map((utility, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8  flex items-center m-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15.2197 8.96967L10.75 13.4393L8.78033 11.4697C8.48744 11.1768 8.01256 11.1768 7.71967 11.4697C7.42678 11.7626 7.42678 12.2374 7.71967 12.5303L10.2197 15.0303C10.5126 15.3232 10.9874 15.3232 11.2803 15.0303L16.2803 10.0303C16.5732 9.73744 16.5732 9.26256 16.2803 8.96967C15.9874 8.67678 15.5126 8.67678 15.2197 8.96967Z"
                fill="#4CAF50"
              ></path>
            </svg>
            <span className="ml-2 dark:text-white">{utility}</span>
          </div>
        ))}
        {dontHave.map((utility, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 flex items-center m-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22ZM16.303 9.14179L13.4391 11.9994L16.303 14.8571C16.3654 14.919 16.415 14.9927 16.4488 15.0738C16.4826 15.155 16.5 15.2421 16.5 15.33C16.5 15.418 16.4826 15.505 16.4488 15.5862C16.415 15.6674 16.3654 15.741 16.303 15.803C16.2411 15.8654 16.1674 15.915 16.0863 15.9488C16.0051 15.9826 15.918 16 15.8301 16C15.7422 16 15.6551 15.9826 15.574 15.9488C15.4928 15.915 15.4192 15.8654 15.3572 15.803L12.5 12.9387L9.64276 15.803C9.58085 15.8654 9.50718 15.915 9.42602 15.9488C9.34486 15.9826 9.25781 16 9.16988 16C9.08196 16 8.99491 15.9826 8.91375 15.9488C8.83259 15.915 8.75892 15.8654 8.69701 15.803C8.63458 15.741 8.58503 15.6674 8.55122 15.5862C8.51741 15.505 8.5 15.418 8.5 15.33C8.5 15.2421 8.51741 15.155 8.55122 15.0738C8.58503 14.9927 8.63458 14.919 8.69701 14.8571L11.5609 11.9994L8.69701 9.14179C8.57159 9.01635 8.50114 8.84623 8.50114 8.66884C8.50114 8.49146 8.57159 8.32133 8.69701 8.1959C8.82242 8.07047 8.99252 8 9.16988 8C9.34725 8 9.51735 8.07047 9.64276 8.1959L12.5 11.0602L15.3572 8.1959C15.4827 8.07047 15.6528 8 15.8301 8C16.0075 8 16.1776 8.07047 16.303 8.1959C16.4284 8.32133 16.4989 8.49146 16.4989 8.66884C16.4989 8.84623 16.4284 9.01635 16.303 9.14179Z"
                fill="#F01B23"
              ></path>
            </svg>
            <span className="ml-2 dark:text-white">{utility}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
