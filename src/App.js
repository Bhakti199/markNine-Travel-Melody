import { useState } from "react";
import "./styles.css";

var musicDictionary = {
  English: [
    {
      Song: "Levitating",
      Singer: "Dua Lipa",
      Ratings: "4.5/5"
    },
    {
      Song: "Find you",
      Singer: "Nick Jonas",
      Ratings: "4.5/5"
    },
    {
      Song: "Jalebi baby",
      Singer: "Teshar",
      Ratings: "4.5/5"
    }
  ],
  Hindi: [
    {
      Song: "Iktara",
      Singer: "Amit Trivedi",
      Ratings: "4/5"
    },
    {
      Song: "Ghungroo",
      Singer: "Arjit Singh",
      Ratings: "4.5/5"
    },
    {
      Song: "Manjha",
      Singer: "Vishal Mishra",
      Ratings: "3.5/5"
    }
  ],
  Marathi: [
    {
      Song: "Tula japnar ahe",
      Singer: "Adarsh Shinde",
      Ratings: "5/5"
    },
    {
      Song: "Zingaat",
      Singer: "Ajay Gogavale",
      Ratings: "4.5/5"
    },
    {
      Song: "Roj roj navyane",
      Singer: "Sonu Nigam",
      Ratings: "5/5"
    }
  ]
};
export default function App() {
  var [outputMusic, setOutputMusic] = useState("English");

  function musicClickHandler(song) {
    setOutputMusic(song);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-labelledby="musicNotes">
          🎶
        </span>
        Travel Melody{" "}
      </h1>
      <p>Checkout some of my favoite songs from three different languages.</p>

      <div className="genreList">
        {Object.keys(musicDictionary).map((music) => {
          return (
            <button
              className="btnClick"
              onClick={() => musicClickHandler(music)}
              style={{ alignself: "left", cursor: "pointer" }}
            >
              {" "}
              {music}
            </button>
          );
        })}
      </div>

      <div className="seeMusicList">
        {musicDictionary[outputMusic].map((music) => {
          return (
            <ul className="display-list" key={music}>
              <li> {music.Song} </li>
              <li> {music.Singer} </li>
              <li> {music.Ratings} </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
