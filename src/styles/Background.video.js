import React, { Fragment } from "react";

import food from "../assets/videos/cooking.mp4";
const VideoBackground = () => (
  <Fragment>
    <div className="shadow" />
    <video autoPlay id="video-background" muted>
      <source src={food} type="video/mp4" />
      <source src={food} type="video/ogg" />
    </video>
  </Fragment>
);

export default VideoBackground;
