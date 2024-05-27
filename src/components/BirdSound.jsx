import { useRef } from "react";

const BirdSound = () => {
  const audioRef = useRef();

  const handleStart = () => {
    audioRef.current.play();
  };

  const handleStop = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <audio ref={audioRef} controls src=""></audio>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default BirdSound;
