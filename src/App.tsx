import "./App.css";
import { AudioClip } from "./types";
import Drum from "./Drum";

const audioClips: AudioClip[] = [
  {
    keyCode: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyCode: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyCode: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyCode: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    keyCode: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    keyCode: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open HH",
  },
  {
    keyCode: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick n' Hat",
  },
  {
    keyCode: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    keyCode: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed HH",
  },
];

function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find(
      (clip) => clip.keyCode === e.key.toUpperCase()
    );
    if (!clip) return;
    (document.getElementById(clip.keyCode) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById("drum-" + clip.keyCode)?.focus();
    document.getElementById("display")!.innerText = clip.description;
  };
  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1>FCC Drum Machine</h1>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.keyCode} />
        ))}
      </div>
      <div id="display"></div>
    </div>
  );
}

export default App;