import React from "react";

const AudioPlayer = ({ src }) => {
  return (
    <audio controls className="w-full mt-2">
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
