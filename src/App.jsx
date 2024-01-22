import { useEffect, useState, useRef } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";
import { soundoff, soundon } from "./assets/icons";
import guitar from "./assets/guitar.wav";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const audioRef = useRef(new Audio(guitar));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayMusic, setIsPlayMusic] = useState(false);

  useEffect(() => {
    if (isPlayMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayMusic]);

  return (
    <main className="bg-slate-200/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <div className="absolute  bottom-2 left-2">
        <img
          src={!isPlayMusic ? soundoff : soundon}
          alt="music"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayMusic(!isPlayMusic)}
        />
      </div>
      <SpeedInsights />
    </main>
  );
}

export default App;
