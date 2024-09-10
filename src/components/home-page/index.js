import { Calendar, Modal, theme } from "antd";
import { useContext, useState } from "react";
import { ApiContext } from "../context";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Header } from "../header";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const {
    region2Data,
    regionDeparture,
    setRegionDeparture,
    regionArrive,
    setRegionArrive,
    districtDeparture,
    setDistrictDeparture,
    districtArrive,
    setDistrictArrive,
    date,
    setDate,
  } = useContext(ApiContext);
  const [filterData, setFilterData] = useState([]);
  const [filterData2, setFilterData2] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (item) => {
    setDistrictDeparture(item);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = (item) => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const districts = (item) => {
    setFilterData(item?.districts);
  };

  const districts2 = (item) => {
    setFilterData2(item?.districts);
  };

  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOk3 = () => {
    setIsModalOpen3(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const onPanelChange = (value) => {
    setDate(value.format("YYYY-MM-DD"));
    handleOk3();
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(https://avatars.mds.yandex.net/get-altay/10376970/2a0000018de89b5e20f08146312957b76f0c/orig",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
      className="bg-sec"
    >
      <Header />
      <div style={{ height: "100vh" }} className="container h-100 py-5">
        <h1 className="fw-bold text-white">
          Har kuni O'zbekiston bo'ylab avtobus qatnovi
        </h1>
        <p className="text-white fw-bold">
          Biz viloyatlar bo'ylab ommabop qatnovlarni taklif etamiz.
          <span style={{ color: "#18aaf2" }} className="">
            Samarqand, Jizzax, Buxoro
          </span>
        </p>

        <div className="row my-3">
          <div className="col-lg-3 col-6">
            <div
              onClick={showModal}
              style={{ cursor: "pointer", height: "80px" }}
              className="bg-white  p-3 rounded-4 pointer w-100 mb-4"
            >
              <p className="text-secondary fw-bold m-0 text-start">Qayerdan</p>
              <p className="p-0 m-0">
                {" "}
                <span className="text-black fw-bold">{regionDeparture}</span>
                <span className="text-secondary fw-bold ms-3">
                  {districtDeparture.slice(0, 10)}
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div
              onClick={showModal2}
              style={{ cursor: "pointer", height: "80px" }}
              className="bg-white p-3 rounded-4 w-100 mb-4"
            >
              <p className="text-secondary fw-bold m-0 text-start">Qayerga</p>
              <p className="p-0 m-0">
                <span className="text-black fw-bold">{regionArrive}</span>
                <span className="text-secondary fw-bold ms-3">
                  {districtArrive.slice(0, 9)}
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div
              onClick={showModal3}
              style={{ cursor: "pointer", height: "80px" }}
              className="bg-white p-3 rounded-4 w-100 mb-4"
            >
              <div className="">
                <span>
                  <p className="text-secondary fw-bold m-0 p-0 text-start">
                    Qachon
                  </p>
                  <p className="p-0 m-0 fw-bold ">{date}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <button
              disabled={
                districtDeparture === "" ||
                districtArrive === "" ||
                date === null
                  ? true
                  : false
              }
              onClick={() => {
                navigate(
                  `/${regionDeparture}/${regionArrive}`
                );
              }}
              style={{ cursor: "pointer", backgroundColor: "#18aaf2" }}
              className="text-white px-5 py-4 rounded-4 fw-bold btn w-100 mb-4"
            >
              Qidiruvni boshlash
            </button>
          </div>
        </div>

        <div className="row mt-5 pt-5 ">
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="bg-white p-3 rounded-4 h-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-signpost-split"
                viewBox="0 0 16 16"
                style={{ color: "#18aaf2" }}
              >
                <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7zm1 3V8H2l-.75 1L2 10zm0-5h6l.75-1L14 3H8z" />
              </svg>

              <p className="p-0 m-0 fw-bold my-3">
                Chiptani qanday sotib olish mumkin?
              </p>
              <p>Siz uchun foydali video darsliklarni tayyorladik</p>
              <button
                style={{ border: "1px solid #18aaf2", color: "#18aaf2" }}
                onClick={() => {
                  navigate("/video");
                }}
                className="btn rounded-3 fw-bold"
              >
                Video darslarni tomosha qilish
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="bg-white p-3 rounded-4 h-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-ticket-detailed"
                viewBox="0 0 16 16"
                style={{ color: "#18aaf2" }}
              >
                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
                <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
              </svg>
              <p className="p-0 m-0 fw-bold my-3">Chiptani tiklash</p>
              <p>
                Chiptangizni yo'qotdingizmi? Siz uni to'g'ridan-to'g'ri saytda
                tiklashingiz mumkin!
              </p>
              <button
                style={{ border: "1px solid #18aaf2", color: "#18aaf2" }}
                onClick={() => {
                  navigate("/tiklash");
                }}
                className="btn rounded-3 fw-bold"
              >
                Chiptani tiklash
              </button>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="bg-white p-3 rounded-4 h-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-ticket-detailed"
                viewBox="0 0 16 16"
                style={{ color: "#18aaf2" }}
              >
                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
                <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
              </svg>
              <p className="p-0 m-0 fw-bold my-3">+ (998) 71 207 87 00</p>
              <p>
                Muammo bormi? 8:00-20:00 Texnik yordam xizmatiga murojaat qiling
              </p>
              <button
                style={{ border: "1px solid #18aaf2" }}
                className="btn rounded-3 fw-bold"
              >
                <a
                  style={{ textDecoration: "none", color: "#18aaf2" }}
                  href="tel: +998938032475"
                >
                  Qo'ng'iroq qilish
                </a>
              </button>
            </div>
          </div>
        </div>

        <Modal
          title="Hududni tanlang"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={"600px"}
        >
          {filterData.length > 0 ? (
            <div>
              <button
                onClick={() => {
                  setFilterData([]);
                  setDistrictDeparture("");
                  setRegionDeparture("");
                }}
                className="btn border my-3 rounded-4 text-secondary fw-bold py-2"
              >
                <ArrowLeftOutlined /> Hududga qaytish
              </button>
              <div className="d-flex align-items-center gap-2 flex-wrap">
                {filterData.map((item, index) => (
                  <div
                    onClick={() => {
                      handleOk(item);
                    }}
                    key={index}
                    style={{ cursor: "pointer" }}
                    className="bg-white pe-5 ps-3 py-3 rounded-4 border d-flex justify-content-center align-items-center"
                  >
                    <p className="text-secondary fw-bold m-0">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center gap-2 flex-wrap">
              {region2Data?.map((item, index) => (
                <div
                  onClick={() => {
                    districts(item);
                    setRegionDeparture(item?.region);
                  }}
                  key={index}
                  style={{ cursor: "pointer" }}
                  className="bg-white pe-5 ps-3 py-3 rounded-4 border d-flex justify-content-center align-items-center"
                >
                  <p className="text-secondary fw-bold m-0">{item?.region}</p>
                </div>
              ))}
            </div>
          )}
        </Modal>

        <Modal
          title="Hududni tanlang"
          open={isModalOpen2}
          onOk={handleOk2}
          onCancel={handleCancel2}
          footer={null}
          width={"600px"}
        >
          {filterData2.length > 0 ? (
            <div>
              <button
                onClick={() => {
                  setFilterData2([]);
                  setDistrictArrive("");
                  setRegionArrive("");
                }}
                className="btn border my-3 rounded-4 text-secondary fw-bold py-2"
              >
                <ArrowLeftOutlined /> Hududga qaytish
              </button>
              <div className="d-flex align-items-center gap-2 flex-wrap">
                {filterData2.map((item, index) => (
                  <div
                    onClick={() => {
                      handleOk2(item);
                      setDistrictArrive(item);
                    }}
                    key={index}
                    style={{ cursor: "pointer" }}
                    className="bg-white pe-5 ps-3 py-3 rounded-4 border d-flex justify-content-center align-items-center"
                  >
                    <p className="text-secondary fw-bold m-0">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center gap-2 flex-wrap">
              {region2Data?.map((item, index) => (
                <div
                  onClick={() => {
                    districts2(item);
                    setRegionArrive(item?.region);
                  }}
                  key={index}
                  style={{ cursor: "pointer" }}
                  className="bg-white pe-5 ps-3 py-3 rounded-4 border d-flex justify-content-center align-items-center"
                >
                  <p className="text-secondary fw-bold m-0">{item?.region}</p>
                </div>
              ))}
            </div>
          )}
        </Modal>

        <Modal
          title="Sanani tanlang"
          open={isModalOpen3}
          onOk={handleOk3}
          onCancel={handleCancel3}
          footer={null}
        >
          <div style={wrapperStyle}>
            <Calendar fullscreen={false} onChange={onPanelChange} />
          </div>
        </Modal>
      </div>
    </div>
  );
};
