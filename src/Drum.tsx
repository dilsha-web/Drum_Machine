import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}

const Drum = ({ audioClip }: DrumProps) => {
  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.keyCode) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById("display")!.innerText = clip.description;
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyCode}`}
      onClick={() => playSound(audioClip)}
    >
      <audio src={audioClip.url} id={audioClip.keyCode} className="clip" />
      {audioClip.keyCode}
    </button>
  );
};

export default Drum;