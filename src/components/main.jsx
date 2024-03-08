import Header from "./Header";
import Slider from "./Slider";
import { History } from "./History";

import { BrowserRouter } from "react-router-dom";
import { CounterDown } from "./CounterDown";

import "../styles/main.css";
import "../styles/header.css";
import "../styles/slider.css";
import "../styles/history.css";

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <History />
      <CounterDown />
    </BrowserRouter>
  );
};

export default Main;
