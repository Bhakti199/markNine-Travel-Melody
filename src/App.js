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
  return (
    <div className="App">
      <h1>🎶 Travel Melody</h1>
      <p>Checkout some of my favoite songs, According to your mood.</p>
      <div className="genreList"></div>
    </div>
  );
}
