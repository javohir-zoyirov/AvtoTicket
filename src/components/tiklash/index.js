import { useContext, useState } from "react";
import { Header } from "../header";
import { Modal } from "antd";
import { ApiContext } from "../context";
import { ShareAltOutlined } from "@ant-design/icons";

export const Tiklash = () => {
  const { ticketValue, choose, click, regionArrive, regionDeparture } =
    useContext(ApiContext);
  const [value, setValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ backgroundColor: "#f5f8fa", height: "100vh" }}>
      <Header />
      <div className="container">
        <h1 style={{ color: "#26404d" }} className="text-black fw-bold mt-4">
          Chiptani tiklash{" "}
        </h1>
        <p style={{ color: "#26404d" }} className="text-black fw-bold mb-4">
          Chipta sotib olingan telefon raqamini kiriting
        </p>
        <div className="bg-white rounded-3 p-3  py-4">
          <label className="text-secondary mb-2 fs-5 fw-bold">
            Telefon raqam
          </label>
          <br />
          <input
            type="number"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{ backgroundColor: "#f5f8fa" }}
            className="px-3 py-1 rounded-3 border-1"
            placeholder="+998912345678"
          />
          <br />
          <button
            disabled={value === null ? true : false}
            onClick={showModal}
            style={{ backgroundColor: "#18aaf2" }}
            className="rounded-4 p-3 border-0 mt-4 fw-bold text-white"
          >
            Biletni olish
          </button>
        </div>
      </div>

      <Modal
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {ticketValue.length === 0 ? (
          Object.values(ticketValue)
            .filter((item) => item.ticketPhone.includes(value))
            .map((res, index) => (
              <div className="mb-5 p-4 border-bottom">
                <div className="w-50">
                  <img
                    className="w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  />
                </div>

                <div>
                  <p className="p-0 m-0">
                    Jo'nash bekati:{" "}
                    <span className="fw-bold fs-5 ms-3">{regionDeparture}</span>{" "}
                  </p>
                  <p className="p-0 m-0">
                    Kelish bekati:{" "}
                    <span className="fw-bold fs-5 ms-3">{regionArrive}</span>{" "}
                  </p>
                  <p className="p-0 m-0">
                    Jo'nash vaqti :{" "}
                    <span className="fw-bold fs-5 ms-3">
                      {choose?.leaveTime}
                    </span>{" "}
                  </p>
                  <p className="p-0 m-0">
                    Avtobusda o'rin:{" "}
                    <span className="fw-bold fs-5 ms-3">{click[index]}</span>{" "}
                  </p>
                  <p className="p-0 m-0">
                    Avtobusda o'rin:{" "}
                    <span className="fw-bold fs-5 ms-3">{res?.ticketName}</span>{" "}
                  </p>
                  <p className="p-0 m-0">
                    To'lov turi:{" "}
                    <span className="fw-bold fs-5 ms-3">Kartada</span>
                  </p>
                  <p className="p-0 m-0">
                    Bilet narxi:{" "}
                    <span className="fw-bold fs-5 ms-3">{choose.price}</span>
                  </p>
                </div>
                <div className="text-center">
                  <button className="text-center btn border-0 fs-3">
                    <a href={"https://web.telegram.org"}>
                      <ShareAltOutlined />
                    </a>
                  </button>
                </div>
              </div>
            ))
        ) : (
          <p>Sizda bilet mavjud emas !</p>
        )}
      </Modal>
    </div>
  );
};
