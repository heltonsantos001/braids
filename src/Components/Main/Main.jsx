import { useState } from "react";
import "./MainStyle.css";
import FotoMain1 from "../../img/FotoMain1.jpg";
import FotoMain2 from "../../img/FotoMain2.jpg"
import FotoMain3 from "../../img/FotoMain3.jpg"
import FotoMain4 from "../../img/FotoMain4.jpg"

export const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [FotoMain1, FotoMain2, FotoMain3, FotoMain4];
  const changeSlide = (direction) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div>
        <main>
          <div className="carousel">
            <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />
            <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
          </div>
          <div id="TitleCard">
            <div>
              <h1>Braids</h1>
            </div>
          </div>
          <div id="ContainerCard">
            <div className="CardBraid"></div>
            <div className="CardBraid"></div>
            <div className="CardBraid"></div>
            <div className="CardBraid"></div>
          </div>
        </main>
      </div>
    </>
  );
};
