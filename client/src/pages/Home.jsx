import { useEffect, useState } from "react";

import LanguangeSelector from "../components/LanguangeSelector/LanguangeSelector";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Hero from "./Home/Hero";
import Couple from "./Home/Couple";
import Events from "./Home/Events";
import Prewedding from "./Home/Prewedding";
import Wishes from "./Home/Wishes";
import Gifts from "./Home/Gifts";
import FloatingIcon from "../components/FloatingIcon/FloatingIcon";

// Assets
// Images/Videos
import ImgForFooter from "../assets/WeddingPhoto/edit/img-for-footer.jpg";
import BgSong from "../assets/web-song.mp3";
// Icons/Symbols
import FloralIcon from "../assets/floral-design.png";

export default function Home() {
  // ------------------------------
  // Website Music Setting
  const [audio] = useState(new Audio(BgSong));
  const [isPlayingSong, setIsPlayingSong] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Enable Scrolling when open invitation
  const enableScroll = () => {
    setIsReady(true);

    audio.volume = 0.2;
    audio.loop = true;
    audio.play();
    setIsPlayingSong(true);
  };

  const togglePlayingSong = () => setIsPlayingSong(!isPlayingSong);

  // Toggle play song logic
  useEffect(() => {
    isPlayingSong ? audio.play() : audio.pause();
  });

  // ------------------------------
  // Languange Setting
  const [chooseLang, setChooseLang] = useState(true);

  const contentLng = (id, en) => {
    const lng = localStorage.getItem("lng");

    if (lng === "id") {
      return id;
    } else {
      return en;
    }
  };

  return (
    <>
      {chooseLang && <LanguangeSelector setChooseLang={setChooseLang} />}

      <Hero enableScroll={enableScroll} contentLng={contentLng} />

      {isReady && (
        <>
          <Navbar />
          <Couple contentLng={contentLng} />
          <Events contentLng={contentLng} />
          <Prewedding />
          <Gifts contentLng={contentLng} />
          <Wishes contentLng={contentLng} />
          <Footer ImgBg={ImgForFooter} ImgFloralDecor={FloralIcon} />
        </>
      )}

      {/* Audio & Select Languange */}
      <FloatingIcon
        isReady={isReady}
        setChooseLang={setChooseLang}
        isPlayingSong={isPlayingSong}
        togglePlayingSong={togglePlayingSong}
      />
    </>
  );
}
