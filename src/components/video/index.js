import { Card, Col, Row } from "antd";
import { Header } from "../header";
import ReactPlayer from "react-player";

export const Video = () => {
  return (
    <div style={{ backgroundColor: "#f5f8fa", height: "100vh" }}>
      <Header />
      <div className="container">
        <h5 className="fs-5 my-5 w-75">
          Sizga avtobus chiptalarini sotib olish, bron qilish va qaytarib berish
          bo'yicha qisqa va tushunarli video darslarni tayyorladik !!
        </h5>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Chiptani qanday sotib olish mumkin" bordered={false}>
              <ReactPlayer url={"https://avtoticket.uz/images/pok1.mp4"} width='100%'
        height='100%'
        controls={true} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Chipta qanday tiklanadi" bordered={false}>
              <ReactPlayer url={"https://avtoticket.uz/images/vos1.mp4"} width='100%'
        height='100%'
        controls={true} />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <h4 className="my-5 py-1">
                Chiptalarni bron qilish va bekor qilish uchun iltimos, avtovokzal
                kassalariga murojaat qiling
              </h4>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
