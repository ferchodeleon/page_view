import Header from "./Header";
import Slider from "./Slider";
import { History } from "./History";
import { Divider } from "./Divider";

import { BrowserRouter } from "react-router-dom";

import "../styles/main.css";
import "../styles/header.css";
import "../styles/slider.css";
import "../styles/history.css";
import "../styles/divider.css";

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <History />
      <Divider title="¡Sigue nuestra música!" />
    </BrowserRouter>
  );
};

export default Main;
