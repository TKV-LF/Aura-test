import React, { useEffect, useState } from "react";
import { notification } from "antd";
import {
  CheckOutlined,
  DeleteOutlined,
  CloseOutlined,
} from "@ant-design/icons";

async function changeStatus(id, status) {
  const endpoint = process.env.REACT_APP_API_ENDPOINT + "/updateStatus/" + id;
  const response = await fetch(endpoint, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: status,
    }),
  });
  if (response.status === 200) {
    notification.success({
      message: "Cập nhật trạng thái thành công",
    });
  } else {
    throw new Error("Failed to update status");
  }
}

async function deleteBooking(id) {
  const endpoint = process.env.REACT_APP_API_ENDPOINT + "/delete/" + id;
  const response = await fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    notification.success({
      message: "Xoá thành công",
    });
  } else {
    throw new Error("Failed to delete booking");
  }
}

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [reRender, setReRender] = useState(0); // [1

  const handleConfirm = async (id) => {
    try {
      await changeStatus(id, "confirmed");
      setReRender((prev) => prev + 1);
    } catch (error) {
      notification.error({
        message: "Cập nhật trạng thái đặt bàn thất bại",
        description: error.message,
      });
    }
  };

  const handleCancel = async (id) => {
    try {
      await changeStatus(id, "cancelled");
      setReRender((prev) => prev + 1);
    } catch (error) {
      notification.error({
        message: "Cập nhật trạng thái đặt bàn thất bại",
        description: error.message,
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBooking(id);
      setReRender((prev) => prev + 1);
    } catch (error) {
      notification.error({
        message: "Xoá đặt bàn thất bại",
        description: error.message,
      });
    }
  };

  useEffect(() => {
    const endpoint = process.env.REACT_APP_API_ENDPOINT + "/getAll";

    try {
      const fetchData = async () => {
        const response = await fetch(endpoint);
        const data = await response.json();
        setOrders(data);
      };
      fetchData();
    } catch (error) {
      notification.error({
        message: "Lấy dữ liệu thất bại",
        description: error.message,
      });
    }
  }, [reRender]);

  return (
    <div className="relative w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto overflow-scroll">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tên khách hàng
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Số điện thoại
            </th>
            <th scope="col" className="px-6 py-3">
              Ngày đặt
            </th>
            <th scope="col" className="px-6 py-3">
              Giờ Đặt
            </th>
            <th scope="col" className="px-6 py-3">
              Trạng thái
            </th>
            <th scope="col" className="px-6 py-3">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {order.name}
              </th>
              <td className="px-6 py-4 whitespace-nowrap">{order.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {order.bookingDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {order.bookingTime}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {order.status.toLowerCase() === "pending" && (
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-yellow-800 bg-yellow-100 rounded-full">
                    Chờ xác nhận
                  </span>
                )}
                {order.status.toLowerCase() === "confirmed" && (
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    Đã xác nhận
                  </span>
                )}
                {order.status.toLowerCase() === "cancelled" && (
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                    Đã hủy
                  </span>
                )}
                {order.status.toLowerCase() === "completed" && (
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    Đã hoàn thành
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex justify-center space-x-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-8 h-8 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => handleConfirm(order._id)}
                  >
                    <span className="sr-only">Xác nhận</span>
                    <CheckOutlined />
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-8 h-8 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => handleCancel(order._id)}
                  >
                    <span className="sr-only">Huỷ</span>
                    <CloseOutlined />{" "}
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-8 h-8 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => handleDelete(order._id)}
                  >
                    <span className="sr-only">Xoá</span>
                    <DeleteOutlined />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
