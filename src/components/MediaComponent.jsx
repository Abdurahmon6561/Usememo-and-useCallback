import { useEffect, useRef } from "react";
import Audio from "../assets/music/audio.m4a";

const MediaComponent = () => {
  const audioRef = useRef(null);
  const videoPlayerRef = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      player.current = new window.YT.Player(videoPlayerRef.current, {
        height: "360",
        width: "640",
        videoId: "F6PqxbvOCUI",
        events: {
          onReady: onPlayerReady,
        },
      });
    };
  }, []);

  const onPlayerReady = () => {
    console.log("YouTube Player is ready");
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const playVideo = () => {
    if (player.current) {
      player.current.playVideo();
    }
  };

  const stopVideo = () => {
    if (player.current) {
      player.current.stopVideo();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-8">
      <audio ref={audioRef}>
        <source src={Audio} type="audio/mpeg" />
      </audio>
      <div className="flex flex-col items-center">
        <div
          ref={videoPlayerRef}
          className="rounded-lg w-full max-h-64 my-4"
        ></div>

        <div className="flex justify-between w-full mt-4">
          <button
            onClick={playVideo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Play Video
          </button>
          <button
            onClick={stopVideo}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Stop Video
          </button>
        </div>
        <div className="flex justify-between w-full mt-4">
          <button
            onClick={playAudio}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Play Audio
          </button>
          <button
            onClick={stopAudio}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Stop Audio
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaComponent;
