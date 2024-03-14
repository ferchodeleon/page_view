import Header from "./Header";
import Slider from "./Slider";
import { History } from "./History";
import { Divider } from "./Divider";
import { Footer } from "./Footer";
import { MusicList } from "./MusicList";
import { MusicStreaming } from "./MusicStreaming";

import { BrowserRouter } from "react-router-dom";

import "../styles/main.css";
import "../styles/header.css";
import "../styles/slider.css";
import "../styles/history.css";
import "../styles/divider.css";
import "../styles/footer.css";
import "../styles/music_list.css";
import "../styles/music_streaming.css";

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

const paragraphs = [
  "Somos la generación que hace la diferencia, nos revelamos ante el molde mediocre de este mundo, somos contracultura, no nos conformamos con las modas o ideologías del momento.",
  "Somos una generación revolucionaria, y con nuestra frente en alto reconocemos sin temor ni vergüenza que Dios es real y que está vivo. Avanzamos firmes porque sabemos que con nuestras pisadas temblará la tierra y que con nuestra voz su presencia desciende.",
  "Conocemos la verdadera causa por la cual debemos luchar, y unidos somos un ejército devastador e incansable que está listo para la victoria. Aquella que conquistamos con ojos cerrados y con rodillas sobre la tierra. Nuestras voces traen una nueva canción; aquella que revela la perfecta paz.",
  "Si morimos por Cristo, también viviremos con él. Si soportamos los sufrimientos, compartiremos su reinado. Si decimos que no lo conocemos, también él dirá que no nos conoce. Y aunque no seamos fieles, él permanece fiel; porque jamás rompe su promesa.",
  "Tú y yo, juntos, ¡SOMOS NXTWAVE",
  "Tú y yo, juntos, ¡SOMOS LA REVOLUCIÓN!",
];

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <History paragraphs={paragraphs} />
      <Divider title="¡Sigue nuestra música!" />
      <MusicList videosYoutube={videos} />
      <Divider title="Escuchanos" />
      <MusicStreaming />
      <Footer />
    </BrowserRouter>
  );
};

export default Main;
