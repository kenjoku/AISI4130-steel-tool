import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-[auto_3fr_1fr] gap-0.5 h-screen p-3 bg-[#1a1a1a]">
        {/* Header */}
        <header className="col-span-12 bg-amber-500 min-h-0">
          ... ... ...
        </header>
        {/* Object View Panel  */}
        <section className="col-span-3 col-start-1 bg-[#252525] min-h-0">
          ...
        </section>
        {/* 3D Viewport Panel */}
        <section className="col-span-6 col-start-4 bg-[#252525] min-h-0">
          <Canvas
            style={{ width: "100%", height: "100%" }}
            camera={{
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              fov: 30,
            }}
          >
            <color attach="background" args={["white"]}></color>
            <ambientLight intensity={3} />
            <OrbitControls />
            boxGeometry = new THREE.BoxGeometry()
          </Canvas>
        </section>
        {/* Object Properties Panel */}
        <section className="col-span-3 col-start-10 row-span-2 bg-[#252525] min-h-0">
          ...
        </section>
        {/* Graphs and Diagrams Panel */}
        <section className="col-span-9 col-start-1 bg-[#252525] min-h-0">
          ...
        </section>
      </div>
    </>
  );
}

export default App;
