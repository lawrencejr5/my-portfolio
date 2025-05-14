import React from "react";
import Typewriter from "./Typewriter";

const Loading = () => {
  return (
    <div className="loading-modal">
      <p className="loading-text">
        <Typewriter speed={40} text="Portfolio data loading... " />
      </p>
    </div>
  );
};

export default Loading;
