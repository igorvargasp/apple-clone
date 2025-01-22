import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSpanRef = useRef<HTMLVideoElement>(null);
  const videoDivRef = useRef<HTMLVideoElement>(null);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, index) => (
          <div id={`slider`} key={index} className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-black">
                <video
                  src={slide.video}
                  typeof="video/mp4"
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {slide.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
