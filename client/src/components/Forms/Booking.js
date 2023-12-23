import React from "react";
import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const generateTimeOptions = (start, end, step) => {
  const options = [];
  const now = new Date();
  let currentTime = new Date(`2023-01-01T${start}:00`);

  while (currentTime <= new Date(`2023-01-01T${end}:00`)) {
    const hours = `0${currentTime.getHours()}`.slice(-2);
    const minutes = `0${currentTime.getMinutes()}`.slice(-2);
    const time = `${hours}:${minutes}`;
    const selected = currentTime <= now ? "selected" : "";
    options.push(
      <option value={time} key={time} selected={selected}>
        {time}
      </option>
    );
    currentTime.setMinutes(currentTime.getMinutes() + step);
  }

  return options;
};

const generateOptions = (start, end, step) => {
  const options = [];
  for (let i = start; i <= end; i += step) {
    options.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return options;
};

const options = {
  title: "Chọn ngày đến",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-white dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-white-200",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    prev: () => <span>Trước</span>,
    next: () => <span>Sau</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date(),
  language: "en",
  disabledDates: [],
  weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "Chọn ngày đến",
  inputDateFormatProp: {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
};

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    adults: "1",
    kids: "0",
    bookingDate: "", // Store the date value here
    bookingTime: "", // Store the time value here
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Here you can access formData.adult, formData.kids, formData.date, and formData.time
    if (formData.bookingTime === "") {
      const timeInput = document.getElementById("time-input");
      formData.bookingTime = timeInput.value;
    }

    if (formData.bookingDate === "") {
      const dateInput = document.getElementById("date");
      const date = new Date(dateInput.value);
      const formattedDate = date
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .split("/")
        .reverse()
        .join("-"); // Format as "year-month-day"
      formData.bookingDate = formattedDate;
    }

    if (formData.name === "") {
      notification.error({
        message: "Vui lòng nhập họ và tên",
      });
      return;
    }

    if (formData.phone === "" || isNaN(formData.phone)) {
      notification.error({
        message: "Số điện thoại không hợp lệ",
      });
      return;
    }

    if (formData.email === "" || !formData.email.includes("@")) {
      notification.error({
        message: "Email không hợp lệ",
      });
      return;
    }

    const endpoint = process.env.REACT_APP_API_ENDPOINT + "/create";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Booking created successfully
        notification.success({
          message: "Đặt bàn thành công",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          adults: "1",
          kids: "0",
          bookingDate: "",
          bookingTime: "",
        });
        navigate("/");
      } else {
        // Handle error response
        const errorData = await response.json();
        notification.error({
          message: "Đặt bàn thất bại",
          description: errorData.message,
        });
      }
    } catch (error) {
      // Handle network or other errors
      notification.error({
        message: "Đặt bàn thất bại",
        description: error.message,
      });
    }
  };
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [show, setShow] = useState(false);
  const handleChange = (date) => {
    setFormData({
      ...formData,
      date: date.toISOString().slice(0, 10),
    });
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <form className="max-w-sm mx-auto p-5" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-5 text-gray-900 dark:text-white">
        Đặt bàn
      </h2>
      <div className="relative z-0 w-full mb-5 group">
        <label
          htmlFor="name-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Họ và tên
        </label>
        <input
          id="name-input"
          name="name"
          type="text"
          value={formData.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nhập họ và tên"
          onChange={handleInputChange}
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="phone-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Số điện thoại
          </label>
          <input
            id="phone-input"
            name="phone"
            value={formData.phone}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhập số điện thoại"
            onChange={handleInputChange}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="email-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            id="email-input"
            name="email"
            type="email"
            value={formData.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhập email"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <label
          htmlFor="note-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Ghi chú
        </label>
        <textarea
          id="note-input"
          name="note"
          type="text"
          value={formData.note}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nhập ghi chú"
          onChange={handleInputChange}
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="adult-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Người lớn
          </label>
          <select
            id="adult-input"
            name="adults"
            value={formData.adults}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleInputChange}
          >
            <option value="1" selected>
              1
            </option>
            {/* BEGIN: Generate adult options */}
            {generateOptions(2, 199, 1)}
            {/* END: Generate adult options */}
          </select>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="kids-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Trẻ con
          </label>
          <select
            id="kids-input"
            name="kids"
            value={formData.kids}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleInputChange}
          >
            {/* BEGIN: Generate kids options */}
            {generateOptions(0, 199, 1)}
            {/* END: Generate kids options */}
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="date-from-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Thời gian đến
        </label>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <Datepicker
              options={options}
              onChange={handleChange}
              show={show}
              setShow={handleClose}
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <select
              name="time"
              id="time-input"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {/* BEGIN: Generate time options */}
              {generateTimeOptions("00:00", "23:45", 15)}
              {/* END: Generate time options */}
            </select>
          </div>
        </div>

        <button
          type="submit"
          id="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tạo đơn
        </button>
      </div>
    </form>
  );
};

export default Booking;
