export default function Information(props) {
  const openTime = new Date(`2023-01-01T${props.openTime}`);
  const closeTime = new Date(`2023-01-01T${props.closeTime}`);
  const now = new Date();
  let openStatus = 0;
  if (
    now.getHours() >= openTime.getHours() &&
    now.getHours() <= closeTime.getHours()
  ) {
    openStatus = 1;
  }

  return (
    <div className="px-10">
      <article>
        <div className="flex flex-col items-left">
          <h1
            className="text-xl font-bold mt-5 dark:text-white"
            itemprop="name"
          >
            {props.restaurantName}
          </h1>
          <p
            className="flex items-center mt-3 dark:color-white dark:text-white"
            itemprop="address"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon/location/line">
                <g id="Color">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.40301 7.13913C5.40301 5.71767 6.57255 4.5541 8.0013 4.5541C9.43005 4.5541 10.5996 5.71767 10.5996 7.13913C10.5996 8.56059 9.43005 9.72417 8.0013 9.72417C6.57255 9.72417 5.40301 8.56059 5.40301 7.13913ZM6.49703 7.13913C6.49703 7.96257 7.17364 8.63573 8.0013 8.63573C8.82896 8.63573 9.50558 7.96257 9.50558 7.13913C9.50558 6.31569 8.82896 5.64253 8.0013 5.64253C7.17364 5.64253 6.49703 6.31569 6.49703 7.13913Z"
                    fill="black"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.66797 7.13913C2.66797 4.22107 5.06828 1.83301 8.0013 1.83301C10.9343 1.83301 13.3346 4.22107 13.3346 7.13913C13.3346 8.92564 12.1659 10.8493 10.9457 12.3688C9.88425 13.6908 8.80675 14.6802 8.47721 14.9828C8.44366 15.0136 8.41786 15.0373 8.40062 15.0535C8.2731 15.114 8.1022 15.1663 8.0013 15.1663C7.90041 15.1663 7.72951 15.114 7.60198 15.0535C7.58475 15.0373 7.55897 15.0136 7.52544 14.9828C7.1959 14.6802 6.11836 13.6908 5.05686 12.3688C3.83671 10.8493 2.66797 8.92564 2.66797 7.13913ZM7.90699 13.8363L8.0013 13.9257L8.09561 13.8363C8.81803 13.1518 9.85021 12.0566 10.703 10.8483C11.5515 9.64594 12.2406 8.3065 12.2406 7.13913C12.2406 4.81909 10.3332 2.92144 8.0013 2.92144C5.66937 2.92144 3.76199 4.81909 3.76199 7.13913C3.76199 8.34025 4.45076 9.67946 5.2999 10.8741C6.15291 12.0743 7.18524 13.1524 7.90699 13.8363Z"
                    fill="black"
                  ></path>
                </g>
              </g>
            </svg>
            {props.address}
          </p>
          <div className="flex justify-left mt-3 w-full">
            <div className="text-left mr-5  dark:text-white">
              Loại hình:{" "}
              <span className="text-red-500">{props.restaurantType}</span>
            </div>
            |
            <div className="text-left ml-5  dark:text-white">
              <span>Khoảng giá: </span>
              <span itemprop="priceRange">{props.priceRange}</span>
            </div>
          </div>
          <div className="mt-3 overflow-hidden my-3">
            <div className="flex justify-left items-center  dark:text-white">
              <p className="text-tag mr-2">Thẻ tag:</p>
              {props.tags.map((tag) => (
                <div className="tag mx-2 p-2 border border-current rounded">
                  <a href="#">{tag}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3" itemprop="openingHours" content="07h00 - 23h00">
            <a href="#time-service" className="mr-2  dark:text-white">
              {openStatus ? (
                <p className="text-green-500 inline">Đang mở cửa:</p>
              ) : (
                <p className="text-red-500 inline">Đóng cửa:</p>
              )}
            </a>
            <span className=" dark:text-white">
              {props.openTime} - {props.closeTime}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
