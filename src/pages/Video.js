import React, { useRef, useState } from "react";
import VideoFooter from "./componentes/footer/VideoFooter";
import VideoSidebar from "./componentes/sidebar/VideoSidebar";
import "./video.css";


function Video({likes, messeges, share, name, description, music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>

    <VideoSidebar 
    likes={likes}
    messeges={messeges}
    share={share}
    
    />
      
      <VideoFooter 
      name={name}
      description={description}
      music={music}
      />

    </div>
  );
}

export default Video;
