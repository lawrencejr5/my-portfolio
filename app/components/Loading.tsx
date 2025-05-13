import React from "react";
import Typewriter from "./Typewriter";

const Loading = () => {
  return (
    <div className="loading-modal">
      <p className="loading-text">
        <Typewriter speed={40} text="Oputa's portfolio loading... " />
      </p>
    </div>
  );
};

export default Loading;
