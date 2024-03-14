import arrow from "../assets/gif/arrow.gif";
import amazonMusic from "../assets/icons_music_platforms/amazon_music.svg";
import appleMusic from "../assets/icons_music_platforms/apple.png";
import claroMusic from "../assets/icons_music_platforms/claro_music.svg";
import deezer from "../assets/icons_music_platforms/deezer.svg";
import spotify from "../assets/icons_music_platforms/spotify.svg";
import youtube from "../assets/icons_music_platforms/youtube.png";

export const MusicStreaming = () => {
  return (
    <section className="container-music-stream">
      <div className="listen">
        <p>¡Sigue la revolución en cualquier lugar a cualquier hora!</p>
        <img src={arrow} alt="arrow" />
      </div>
      <div className="listen-platforms">
        <p>Disponible en:</p>
        <div className="platforms">
          <img src={spotify} alt="icon spotify" />
          <img src={amazonMusic} alt="icon amazon music" />
          <img src={youtube} alt="icon youtube music" />
          <img className="appleMusic" src={appleMusic} alt="icon apple music" />
          <img src={claroMusic} alt="icon claro music" />
          <img src={deezer} alt="icon deezer" />
        </div>
      </div>
    </section>
  );
};
