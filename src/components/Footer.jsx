import instragram from "../assets/icons_redes_footer/instagram-500.svg";
import facebook from "../assets/icons_redes_footer/facebook.svg";
import x from "../assets/icons_redes_footer/x.svg";
import youtube from "../assets/icons_redes_footer/youtube.svg";
import tik_tok from "../assets/icons_redes_footer/tik-tok.svg";

export const Footer = () => {
  return (
    <div className="container_footer">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/nxtwaaave/"
      >
        <img src={instragram} alt="logo instragram" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/nxtwaaave"
      >
        <img src={facebook} alt="logo facebook" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/nxtwaaave">
        <img src={x} alt="logo x" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/@NxtWaveBand"
      >
        <img src={youtube} alt="logo youtube" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.tiktok.com/@nxtwaaave"
      >
        <img src={tik_tok} alt="logo Tik tok" />
      </a>
    </div>
  );
};
