import Header from "./Header";
import Slider from "./Slider";
import { History } from "./History";
import { Divider } from "./Divider";
import { Footer } from "./Footer";
import { MusicList } from "./MusicList";

import { BrowserRouter } from "react-router-dom";

import "../styles/main.css";
import "../styles/header.css";
import "../styles/slider.css";
import "../styles/history.css";
import "../styles/divider.css";
import "../styles/footer.css";
import "../styles/music_list.css";

const videos = [
  {
    title: "we are the revolution",
    src: "https://www.youtube.com/embed/aW3u2ot3sss?si=N__Z9ObEcxNwbTvm",
    titleVideo: "YouTube video player",
    frameborder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  },
];

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <History />
      <Divider title="¡Sigue nuestra música!" />
      <MusicList videosYoutube={videos} />
      <Divider title="Escuchanos" />
      <Footer />
    </BrowserRouter>
  );
};

export default Main;
