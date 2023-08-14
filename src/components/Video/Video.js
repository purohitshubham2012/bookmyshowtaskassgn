import React, { useEffect, useState } from "react";
import styles from "./video.module.css";

const Video = (props) => {
  const [videoID, setVideoID] = useState("");

  useEffect(() => {
    getYoutubeVideoID(props.videoURL);
  }, [props.videoURL]);

  const getYoutubeVideoID = (videoURL) => {
    let url = new URL(props.videoURL);
    let params = new URLSearchParams(url.search);
    let videoID = params.has("v") ? params.get("v") : " ";
    setVideoID(videoID);
    console.log("params", videoID);
  };

  return (
    // <div>
    //   <video controls width="100%">
    //     {/* <source src={selectedVideo} type="video/webm" /> */}
    //     <source
    //       src={"https://www.youtube.com/embed/" + videoID}
    //       type="video/mp4"
    //     />
    //     Sorry, your browser doesn't support videos.
    //   </video>
    // </div>
    <div className={styles.videoContainer}>
      <iframe
        width="100%"
        height="400"
        src={"https://www.youtube.com/embed/" + videoID + "?autoplay=1&mute=1"}
        title="Youtube Player"
        // frameborder="0"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
};

export default Video;
