import { useState } from "react";

export const MusicList = ({ videosYoutube }) => {
  const [videos] = useState(videosYoutube);
  const keyObj = Object.values(videos);
  const ListVideos = keyObj.map((video) => (
    <div>
      <iframe
        src={video.src}
        title={video.titleVideo}
        frameborder={video.frameborder}
        allow={video.allow}
        allowFullScreen
      />
      <h2>{video.title}</h2>
    </div>
  ));
  console.log(ListVideos.length);
  return (
    <div
      className={`container-video ${ListVideos.length >= 2 && "grid-videos"}`}
    >
      {ListVideos}
    </div>
  );
};
