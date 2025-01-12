import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const [count, setCount] = useState(0);
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
      <div data-scroll-section>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div data-scroll-section>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <img
          data-scroll
          data-scroll-speed="2"
          src={reactLogo}
          alt="React Logo"
        />
        <button>Click me</button>
        <div className="card">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
      <div data-scroll-section className="scroll-direction-demo">
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="9"
          className="scroll-item"
        >
          Bergerak horizontal ke kanan
        </div>
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-6"
          className="scroll-item"
        >
          Bergerak horizontal ke kiri
        </div>
        <div
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="4"
          className="scroll-item"
        >
          Bergerak vertikal cepat
        </div>
      </div>
      <div data-scroll-section className="diagonal-scroll-demo">
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="6"
          className="diagonal-item"
        >
          <div className="diagonal-content">Bergerak Menyerong</div>
        </div>

        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-6"
          className="diagonal-item"
        >
          <div className="diagonal-content">Bergerak Menyerong Berlawanan</div>
        </div>
      </div>
    </div>
  );
}

export default App;
