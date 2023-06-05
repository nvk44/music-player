import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Gundellona",
      artist: "Anirudh Ravichander",
      img_src: "./images/gg.jpg",
      src: "./songs/gundellona.mp3.mp3",
    },
    {
      title: "Akdi pakdi",
      artist: "Lijo George-Dj",
      img_src: "./images/ak.jpg",
      src: "./songs/akdi pakdi.mp3",
    },
    {
      title: "Rooba Rooba",
      artist: "sathwik",
      img_src: "./images/or.jpg",
      src: "./songs/rr.mp3",
    },
    {
      title: "Nenu nuvvantu",
      artist: "suvarna",
      img_src: "./images/or.jpg",
      src: "./songs/nn.mp3",
    },

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;