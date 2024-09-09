import { Card, Col, Row } from "antd";
import { Header } from "../header";
import ReactPlayer from "react-player";

export const Video = () => {
  return (
    <div style={{ backgroundColor: "#f5f8fa", minHeight: "100vh" }}>
      <Header />
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h5 className="fs-5 my-5 w-75 text-center">
          Sizga avtobus chiptalarini sotib olish, bron qilish va qaytarib berish
          bo'yicha qisqa va tushunarli video darslarni tayyorladik !!
        </h5>
        <Row gutter={16} style={{ width: "100%" }}>
          <Col lg={8} md={12} xs={24} className="mb-3">
            <Card
              className=""
              title="Chiptani qanday sotib olish mumkin"
              bordered={false}
            >
              <ReactPlayer
                url={"https://avtoticket.uz/images/pok1.mp4"}
                width="100%"
                height="100%"
                controls={true}
              />
            </Card>
          </Col>
          <Col lg={8} md={12} xs={24} className="mb-3">
            <Card className="" title="Chipta qanday tiklanadi" bordered={false}>
              <ReactPlayer
                url={"https://avtoticket.uz/images/vos1.mp4"}
                width="100%"
                height="100%"
                controls={true}
              />
            </Card>
          </Col>
          <Col lg={8} md={12} xs={24} className="mb-3">
            <Card
              className="h-100 d-flex justify-content-center align-items-center"
              bordered={false}
            >
              <h5 className="text-center">
                Chiptalarni bron qilish va bekor qilish uchun iltimos,
                avtovokzal kassalariga murojaat qiling
              </h5>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
