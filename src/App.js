import { useState } from "react";
import "./styles.css";

var musicDictionary = {
  English: [
    {
      Song: "Levitating",
      Singer:
        "Dua Lipa is Singer of these song. This song is about having fun and meeting someone and falling in love.",
      Ratings: "4.5/5"
    },
    {
      Song: "Find you",
      Singer:
        "Nick Jonas is singer of this song. Jonas is seen wandering the desert and it opened up all kinds of questions about who “Find You” is all about.",
      Ratings: "4.5/5"
    },
    {
      Song: "Jalebi baby",
      Singer:
        "Teshar is singer of this song. The song title refers to a well-known South Asian and Middle Eastern sweet known as jalebi.",
      Ratings: "4.5/5"
    }
  ],
  Hindi: [
    {
      Song: "Iktara",
      Singer:
        "This song is by Amit Trivedi. This song is about,'Oh my heart you're crazy, Only you know what you think of'.",
      Ratings: "4/5"
    },
    {
      Song: "Ghungroo",
      Singer:
        "The singer is Arjit Singh. This is a party song with lovable music beats.",
      Ratings: "4.5/5"
    },
    {
      Song: "Manjha",
      Singer:
        "Beautiful romantic song sung by Vishal Mishra. This song is about expressing feelings through lovable beats lyrics.",
      Ratings: "3.5/5"
    }
  ],
  Marathi: [
    {
      Song: "Tula japnar ahe",
      Singer:
        "Adarsh Shinde is singer of this song. This song express the relation between brother and sister. ",
      Ratings: "5/5"
    },
    {
      Song: "Zingaat",
      Singer:
        "Ajay Gogavale is singer of this song. This a party song, which has a most energetic music.",
      Ratings: "4.5/5"
    },
    {
      Song: "Roj roj navyane",
      Singer:
        "Sonu Nigam is singer of this song. This is a romantic song express the feeling of love. ",
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
              <li style={{ fontWeight: "bold" }}> {music.Song} </li>
              <li> {music.Singer} </li>
              <li style={{ fontWeight: "bold" }}> {music.Ratings} </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
