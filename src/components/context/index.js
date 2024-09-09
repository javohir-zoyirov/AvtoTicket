import { createContext } from "react";

export const ApiContext = createContext({
  ticketValue:[],
  setTicketValue:(ticketValue) =>{},
  region2Data: [],
  regionDeparture: "",
  setRegionDeparture: (regionDeparture) => {},
  regionArrive: "",
  setRegionArrive: (regionDeparture) => {},
  districtDeparture: "",
  setDistrictDeparture: (regionDeparture) => {},
  districtArrive: "",
  setDistrictArrive: (regionDeparture) => {},
  date: null,
  setDate: (regionDeparture) => {},
  isModalOpen: false,
  setIsModalOpen: (isModalOpen) => {},
  isModalOpen2: false,
  setIsModalOpen2: (isModalOpen2) => {},
  isModalOpen3: false,
  setIsModalOpen3: (isModalOpen3) => {},
  filterData: [],
  setFilterData: (filterData) => {},
  filterData2: [],
  setFilterData2: (filterData2) => {},
  reys2Data: [],
  setReysData: (reysData) => {},
  choose: [],
  setChoose: (choose) => {},
  click: [],
  setClick: (click) => {},
  setTicketName:(ticketName) => {},
  ticketName:"",
  setTicketPhone:(ticketPhone) => {},
  ticketPhone:null,
  setTicketEmail:(ticketEmail) => {},
  ticketEmail:"",
});
