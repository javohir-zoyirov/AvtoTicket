import { useContext, useState } from "react";
import { ApiContext } from "../context";
import { Header } from "../header";
import { useNavigate } from "react-router";

export const Order = () => {
  const [ticketDetails, setTicketDetails] = useState({});
  const {
    choose,
    click,
    regionDeparture,
    regionArrive,
    setTicketEmail,
    setTicketName,
    setTicketPhone,
    setTicketValue,
    ticketValue,
  } = useContext(ApiContext);
  const navigate = useNavigate();

  const handleInputChange = (index, field, value) => {
    setTicketDetails((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }));
  };

  const keyingi = () => {
    setTicketValue(ticketDetails);
    navigate('/payment')
  };

  console.log(ticketValue, "ticketValue");

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#f5f8fa" }}>
        <div className="container py-4">
          <h2 style={{ color: "#26404d" }} className="fw-bold">
            Buyurtma
          </h2>
          <p style={{ color: "#26404d" }} className="fw-bold">
            {choose?.date}, Safar vaqti - 6 s. 0 daq.
          </p>
        </div>

        <div className="container pt-4 pb-3">
          {click.map((item, idx) => (
            <div key={idx} className="bg-white p-4 py-5 rounded-4 mb-5">
              <p className="fw-bold fs-5">
                {idx + 1} - yo'lovchi,{" "}
                <span style={{ color: "#18aaf2" }} className="fs-5 fw-bold">
                  {item} - O'rindiq
                </span>
              </p>
              <div className="row border-bottom py-3">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <label 
                    style={{ fontWeight: "bold" }}
                    className="text-secondary"
                  >
                    To'liq ism-sharifi
                  </label>
                  <br />
                  <input
                    onChange={(e) => handleInputChange(idx, 'ticketName', e.target.value)}
                    style={{ backgroundColor: "#f5f8fa" }}
                    className="p-3 rounded-4 form-control mt-3"
                    placeholder="F.I.O"
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <label
                    style={{ fontWeight: "bold" }}
                    className="text-secondary"
                  >
                    Telefon raqam
                  </label>
                  <br />
                  <input
                    onChange={(e) => handleInputChange(idx, 'ticketPhone', e.target.value)}
                    type="number"
                    style={{ backgroundColor: "#f5f8fa" }}
                    className="p-3 rounded-4 form-control mt-3"
                    placeholder="+998912345678"
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <label
                    style={{ fontWeight: "bold" }}
                    className="text-secondary"
                  >
                    Elektron pochta
                  </label>
                  <br />
                  <input
                    onChange={(e) => handleInputChange(idx, 'ticketEmail', e.target.value)}
                    style={{ backgroundColor: "#f5f8fa" }}
                    className="p-3 rounded-4 form-control mt-3"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

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

          <div className="col-lg-3  col-md-6 col-12">
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

          <div className="col-lg-2  col-md-6 col-12">
          <button
            onClick={() => {
              keyingi()
            }}
            style={{ backgroundColor: "#18aaf2" }}
            className="btn text-white fw-bold p-4 px-5 rounded-4 mb-3 w-100"
            disabled={ticketValue.length ? true : false}
          >
            Keyingi
          </button>
          </div>
        </div>
      </div>
    </>
  );
};
