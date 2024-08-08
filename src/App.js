import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { ApiContext } from "./components/context";
import { HomePage } from "./components/home-page";
import { useState } from "react";
import { RegionData } from "./components/data/regionData";
import { About } from "./components/about-me";
import { Questions } from "./components/question and answer";
import { Video } from "./components/video";
import { Tiklash } from "./components/tiklash";
import { Reys } from "./components/reys";
import { ReysData } from "./components/data/reysData";
import { TicketChoose } from "./components/ticket-choose";
import { Order } from "./components/order";
import { Payment } from "./components/payment";

function App() {
  const [regionData, setRegionData] = useState([...RegionData]);
  const [reysData, setReysData] = useState([...ReysData]);
  const [regionDeparture, setRegionDeparture] = useState("");
  const [regionArrive, setRegionArrive] = useState("");
  const [districtDeparture, setDistrictDeparture] = useState("");
  const [districtArrive, setDistrictArrive] = useState("");
  const [date, setDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [filterData2, setFilterData2] = useState([]);
  const [choose, setChoose] = useState([]);
  const [click, setClick] = useState([]);
  const [ticketName, setTicketName] = useState("");
  const [ticketPhone, setTicketPhone] = useState(null);
  const [ticketEmail, setTicketEmail] = useState("");
  const [ticketValue, setTicketValue] = useState([]);

  // console.log(ticketName, "ticketNAme");
  // console.log(ticketPhone, "ticketPhone");
  // console.log(ticketEmail, "ticketEmail");

  return (
    <div>
      <ApiContext.Provider
        value={{
          setTicketValue,
          ticketValue,
          setTicketName,
          ticketName,
          setTicketPhone,
          ticketPhone,
          setTicketEmail,
          ticketEmail,
          click,
          setClick,
          setChoose,
          choose,
          reysData,
          setReysData,
          regionData,
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
          setIsModalOpen,
          isModalOpen2,
          setIsModalOpen2,
          isModalOpen3,
          setIsModalOpen3,
          filterData,
          setFilterData,
          filterData2,
          setFilterData2,
        }}
      >
        <Router>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/question-answer" element={<Questions />} />
            <Route path="/video" element={<Video />} />
            <Route path="/tiklash" element={<Tiklash />} />
            <Route path="/reys" element={<Reys />} />
            <Route path="/ticket-choose" element={<TicketChoose />} />
            <Route path="/order" element={<Order />} />
            <Route path="/payment" element={<Payment/>} />
          </Routes>
        </Router>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
