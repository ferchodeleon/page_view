import Header from "./Header";
import Slider from "./Slider";

import { BrowserRouter } from "react-router-dom";
import { CounterDown } from "./CounterDown";

import "../styles/main.css";
import "../styles/header.css";
import "../styles/slider.css";

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <CounterDown />
    </BrowserRouter>
  );
};

export default Main;
