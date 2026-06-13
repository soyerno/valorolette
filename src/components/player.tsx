import { useState, useEffect } from "react";

const useAudio = (url: string): [boolean, () => void] => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

interface PlayerProps {
  url: string;
  play: boolean | string | null;
}

export const Player = ({ url, play }: PlayerProps) => {
  const [, toggle] = useAudio(url);

  useEffect(() => {
    play && toggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);

  return (
    <div>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
    </div>
  );
};
