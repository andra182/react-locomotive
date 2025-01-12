import { useEffect, useRef } from "react";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;
    // Tunggu sampai DOM benar-benar siap
    setTimeout(() => {
      if (scrollRef.current) {
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: "is-revealed",
          lerp: 0.05,
        });
      }
    }, 100);

    // Cleanup
    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <div>
        <h1>Selamat Datang di Website!</h1>
        <p>Selamat datang di halaman kami!</p>
      </div>
      <div className="scroll-direction-demo" data-scroll-section>
        <div
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="4"
          className="scroll-item"
        >
          Bergerak vertikal
        </div>
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="4"
          className="scroll-item"
        >
          Bergerak horizontal
        </div>
      </div>
      <div
        data-scroll-section
        style={{
          height: "100px",
          margin: "2rem 0",
          borderTop: "2px solid #888",
          borderBottom: "2px solid #888",
        }}
      ></div>
      <div data-scroll-section className="diagonal-scroll-demo">
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-6"
          className="diagonal-item"
        >
          <div className="diagonal-content">Bergerak Menyerong</div>
        </div>

        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="6"
          className="diagonal-item"
        >
          <div className="diagonal-content">Bergerak Menyerong Berlawanan</div>
        </div>
      </div>
    </div>
  );
}

export default App;
