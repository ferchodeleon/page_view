import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { CounterDown } from "./CounterDown";

import "../styles/main.css";
import "../styles/header.css";

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <CounterDown />
    </BrowserRouter>
  );
};

export default Main;
