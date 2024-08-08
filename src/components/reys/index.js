import { Header } from "../header";
import { Calendar, Table, theme, Modal } from "antd";
import "./reys.css";
import { useContext } from "react";
import { ApiContext } from "../context";
import { useNavigate } from "react-router";
import { ArrowLeftOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "Ketish",
    dataIndex: "leaveTime",
    key: "leaveTime",
    // className: "ketish-column",
    render: (text) => (
      <span style={{ color: "blue", fontWeight: "bold" }}>{text}</span>
    ),
  },
  {
    title: "Kelish",
    dataIndex: "arriveTime",
    key: "arriveTime",
    // className: "kelish-column",
    render: (text) => (
      <span style={{ color: "green", fontWeight: "bold" }}>{text}</span>
    ),
  },
  {
    title: "Reys nomi",
    dataIndex: "direction",
    key: "direction",
    // className: "reys-column",
    render: (text) => <span style={{ fontStyle: "italic" }}>{text}</span>,
  },
  {
    title: "O'rindiq",
    dataIndex: "seatBus",
    key: "seatBus",
    // className: "seat-column",
    render: (text) => <span style={{ color: "" }}>{text}</span>,
  },
  {
    title: "Tarif so'm",
    dataIndex: "price",
    key: "price",
    // className: "tariff-column",
    render: (text) => (
      <span style={{ color: "", fontWeight: "bold" }}>{text} so'm</span>
    ),
  },
  {
    title: "Avtobus modeli",
    dataIndex: "model",
    key: "model",
    // className: "model-column",
    render: (text) => <span style={{ fontWeight: "bold" }}>{text}</span>,
  },
];

const data2 = [
  {
    key: "1",
    ketishTime: "8 : 30",
    kelishTime: "16 : 30",
    reys: "Buxoro-Toshkent",
    seat: "32",
    tariff: "139000",
    model: "AllComfort YUTONG 51 NEW",
  },
  {
    key: "2",
    ketishTime: "11 : 30",
    kelishTime: "19 : 30",
    reys: "Buxoro-Toshkent",
    seat: "31",
    tariff: "139000",
    model: "AllComfort YUTONG 51 NEW",
  },
  {
    key: "3",
    ketishTime: "14 : 30",
    kelishTime: "22 : 30",
    reys: "Buxoro-Toshkent",
    seat: "12",
    tariff: "139000",
    model: "AllComfort YUTONG 51 NEW",
  },
];

export const Reys = () => {
  const {
    choose,
    setChoose,
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
    isModalOpen,
    isModalOpen2,
    isModalOpen3,
    setIsModalOpen2,
    setIsModalOpen,
    setIsModalOpen3,
    filterData,
    setFilterData,
    filterData2,
    setFilterData2,
    regionData,
    reysData,
  } = useContext(ApiContext);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOk = (item) => {
    setDistrictDeparture(item);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
  const handleOk3 = () => {
    setIsModalOpen3(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };
  const onPanelChange = (value) => {
    setDate(value.format("YYYY-MM-DD"));
    handleOk3();
  };
  const rowClassName = (record, index) => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
   let reys = `${regionDeparture}-${regionArrive}`;

   let filterReys = reysData.filter(item => {
    if (item.date === date) {
      return item.direction.toLowerCase().includes(reys.toLowerCase());
    } else {
      return false;
    }
  });
  
  const onRowClick = (record) => {
    setChoose(record);
    navigate('/ticket-choose');
  };
  
  return (
    <div style={{ backgroundColor: "#f5f8fa" }}>
      <Header />
      <div style={{height:"100vh"}} className="container py-3">
        <h2 className="fw-bold my-4">Reysni tanlash</h2>
        <div
          style={{ backgroundColor: "#cfdee6", marginBottom:"200px" }}
          className="row p-3 py-4 rounded my-3"
        >
          <div className="col-lg-4">
          <div
            onClick={showModal}
            style={{ cursor: "pointer",  height: "80px" }}
            className="bg-white pe-5 ps-3 p-3 rounded-4 pointer d-flex justify-content-center align-items-center mb-3"
          >
            <p className="p-0 m-0">
              {" "}
              <span className="text-black fw-bold">{regionDeparture}</span>
              <span className="text-secondary fw-bold ms-3">
                {districtDeparture}
              </span>
            </p>
          </div>
          </div>
          <div className="col-lg-4">
          <div
            onClick={showModal2}
            style={{ cursor: "pointer", height: "80px" }}
            className="bg-white pe-5 ps-3 p-3 rounded-4 d-flex justify-content-center align-items-center mb-3"
          >
            <p className="p-0 m-0">
              <span className="text-black fw-bold">{regionArrive}</span>
              <span className="text-secondary fw-bold ms-3">
                {districtArrive}
              </span>
            </p>
          </div>
          </div>
          <div className="col-lg-4">
          <div
            onClick={showModal3}
            style={{ cursor: "pointer", height: "80px" }}
            className="bg-white pe-5 ps-3 p-3 rounded-4 d-flex align-items-center justify-content-center mb-3"
          >
            <p className="p-0 m-0 fw-bold ">{date}</p>
          </div>
          </div>
        </div>
        <Table
  className="mt-4"
  columns={columns}
  dataSource={filterReys}
  size="middle"
  rowClassName={rowClassName}
  onRow={(record, rowIndex) => {
    return {
      onClick: () => onRowClick(record),
    };
  }}
  rowStyle={(record, index) => ({
    backgroundColor: index % 2 === 0 ? "#fafafa" : "#ffffff",
  })}
  scroll={{ x: 800, y: 480 }} // 'x' bilan gorizontal va 'y' bilan vertikal skroll
/>

        <Modal
          title="Hududni tanlang"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={"600px"}
        >
          {filterData.length   > 0 ? (
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
              {regionData?.map((item, index) => (
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
          title="Basic Modal"
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
              {regionData?.map((item, index) => (
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
          title="Basic Modal"
          open={isModalOpen3}
          onOk={handleOk3}
          onCancel={handleCancel3}
          footer={null}
        >
          <div style={wrapperStyle}>
            <Calendar fullscreen={false} onChange={onPanelChange} />
          </div>
        </Modal>
        {/* <Table>
      <Thead>
        <Tr>
          <Th>Kelish</Th>
          <Th>Ketish</Th>
          <Th>Reys nomi</Th>
          <Th>O'rindiq</Th>
          <Th>Tarif(so'm)</Th>
          <Th>Avtobus modeli</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="">
          <Td>09 : 30</Td>
          <Td>16 : 30</Td>
          <Td>Toshkent-Buxoro 55-515-05-05</Td>
          <Td>32</Td>
          <Td>139000 so'm</Td>
          <Td>AllComfort YUTONG 51 NEW</Td>
        </Tr>
        <Tr>
          <Td>09 : 30</Td>
          <Td>16 : 30</Td>
          <Td>Toshkent-Buxoro 55-515-05-05</Td>
          <Td>32</Td>
          <Td>139000 so'm</Td>
          <Td>AllComfort YUTONG 51 NEW</Td>
        </Tr>
      </Tbody>
    </Table> */}
      </div>
    </div>
  );
};
