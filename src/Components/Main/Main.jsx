import { useState } from "react";
import "./MainStyle.css";
import FotoMain1 from "../../img/FotoMain1.jpg";
import FotoMain2 from "../../img/FotoMain2.jpg"
import FotoMain3 from "../../img/FotoMain3.jpg"
import FotoMain4 from "../../img/FotoMain4.jpg"
import FotoCard1 from "../../img/FotoCard1.jpg"


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
            <div className="CardBraid">
               <div style={{ width: '300px', height: '300px', overflow: 'hidden' }}>
                  <img src={FotoCard1}
                       alt="Imagem"
                       style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
               </div>
                <div id="TextCard">
                 <h1>braids</h1>
                 <p>300 reais</p>
            </div>
          </div>

          <div className="CardBraid">
               <div style={{ width: '300px', height: '300px', overflow: 'hidden' }}>
                  <img src={FotoCard1}
                       alt="Imagem"
                       style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
               </div>
                <div id="TextCard">
                 <h1>braids</h1>
                 <p>300 reais</p>
            </div>
          </div>

          <div className="CardBraid">
               <div style={{ width: '300px', height: '300px', overflow: 'hidden' }}>
                  <img src={FotoCard1}
                       alt="Imagem"
                       style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
               </div>
                <div id="TextCard">
                 <h1>braids</h1>
                 <p>300 reais</p>
            </div>
          </div>

          <div className="CardBraid">
               <div style={{ width: '300px', height: '300px', overflow: 'hidden' }}>
                  <img src={FotoCard1}
                       alt="Imagem"
                       style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
               </div>
                <div id="TextCard">
                 <h1>braids</h1>
                 <p>300 reais</p>
            </div>
          </div>
          </div>
        </main>
      </div>
    </>
  );
};
