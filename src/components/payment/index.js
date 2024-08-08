import { useContext, useState } from "react";
import { Header } from "../header";
import { ApiContext } from "../context";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

export const Payment = () => {
  const { choose, regionDeparture, regionArrive, click, ticketValue } =
    useContext(ApiContext);
  const [nomer, setNomer] = useState(null);
  const [kod, setKod] = useState(null);
  console.log(ticketValue);

  //   const onFinish = (values) => {
  //     console.log("Success:", values);
  //   };
  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };

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
    <div style={{ backgroundColor: "#f5f8fa" }}>
      <Header />

      <div className="container py-4">
        <div>
          <h2 style={{ color: "#26404d" }} className="fw-bold">
            To'lov Payme
          </h2>
          <p style={{ color: "#26404d" }} className="fw-bold">
            {choose?.date}, Safar vaqti - 6 s. 0 daq.
          </p>
        </div>

        <div></div>
      </div>

      <div className="container pt-4 pb-3">
        <div className="bg-white p-4 py-5 rounded-4 mb-5">
          <div style={{ width: "100px", height: "30px" }} className="">
            <img className="w-100" src="https://avtoticket.uz/svg/payme.svg" />
          </div>
          <div className="row py-3">
            <div className="col-lg-6 col-12 mb-3">
              <label style={{ fontWeight: "bold" }} className="text-secondary">
                Karta raqami
              </label>
              <br />
              <input
                style={{ backgroundColor: "#f5f8fa" }}
                className="p-3 rounded-4 form-control mt-3"
                placeholder="Karta raqami"
                type="number"
                onChange={(e) => {
                  setNomer(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6 col-12 mb-3">
              <label style={{ fontWeight: "bold" }} className="text-secondary">
                Karta amal qilish muddati
              </label>
              <br />
              <input
                type="number"
                style={{ backgroundColor: "#f5f8fa" }}
                className="p-3 rounded-4 form-control mt-3"
                placeholder="OO/YY"
                onChange={(e) => {
                  setKod(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Sizning biletlaringiz"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {Object.values(ticketValue).map((item, index) => (
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
                <span className="fw-bold fs-5 ms-3">{choose?.leaveTime}</span>{" "}
              </p>
              <p className="p-0 m-0">
                Avtobusda o'rin:{" "}
                <span className="fw-bold fs-5 ms-3">{click[index]}</span>{" "}
              </p>
              <p className="p-0 m-0">
                Avtobusda o'rin:{" "}
                <span className="fw-bold fs-5 ms-3">{item?.ticketName}</span>{" "}
              </p>
              <p className="p-0 m-0">
                To'lov turi: <span className="fw-bold fs-5 ms-3">Kartada</span>
              </p>
              <p className="p-0 m-0">
                Bilet narxi:{" "}
                <span className="fw-bold fs-5 ms-3">{choose.price}</span>
              </p>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button className="text-center btn border-0 fs-3">
            <a href={"@ZoyirovJavohir"}>
              <ShareAltOutlined />
            </a>{" "}
          </button>
        </div>
      </Modal>

      <div className="container mx-auto mt-5 row">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="d-flex align-items-center gap-3 mb-3 w-100">
            <div className="bg-white p-3 rounded-4">
              <p style={{ color: "#18aaf2" }} className="p-0 m-0 fw-bold">
                {choose?.leaveTime}
              </p>
              <p className="p-0 m-0">{regionDeparture}</p>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right text-info"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </span>
            <div className="bg-white p-3 rounded-4">
              <p style={{ color: "#18aaf2" }} className="p-0 m-0 fw-bold">
                {choose?.arriveTime}
              </p>
              <p className="p-0 m-0">{regionArrive}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-2  col-md-6 col-12">
          <div className="bg-white p-3 rounded-4 w-100 mb-3">
            <p style={{ color: "#18aaf2" }} className="p-0 m-0 fw-bold">
              0 so'm
            </p>
            <p className="p-0 m-0">Avtovogzal yig'imlari</p>
          </div>
        </div>

        <div className="col-lg-4  col-md-6 col-12">
          <div className="d-flex align-items-center gap-3 mb-3 w-100">
            <div className="bg-white p-3 rounded-4">
              <p style={{ color: "#18aaf2" }} className="p-0 m-0 fw-bold">
                {choose?.price} so'm
              </p>
              <p className="p-0 m-0">1 ta chipta narxi</p>
            </div>
            <div className="bg-white p-3 rounded-4">
              <p style={{ color: "#18aaf2" }} className="p-0 m-0 fw-bold">
                {click.length * 139000} so'm
              </p>
              <p className="p-0 m-0">Jami narxi</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3  col-md-6 col-12">
          <button
            onClick={showModal}
            disabled={nomer === null && kod === null ? true : false}
            style={{ backgroundColor: "#18aaf2" }}
            className="btn text-white fw-bold p-4 px-5 rounded-4"
          >
            Biletni olish
          </button>
        </div>
      </div>
    </div>
  );
};
