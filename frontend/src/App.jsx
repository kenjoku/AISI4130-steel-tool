import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import Panel from "./components/panel";
import CreateCylinder from "./components/createCylinder"
import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-[auto_3fr_1fr] gap-0.5 h-screen p-1 bg-[#1a1a1a]">
        {/* Header */}
        <header className="col-span-12 bg-[#252525] min-h-0 ovberflow-hidden">
          ...
          <br />
          ...
        </header>
        {/* Object View Panel  */}
        <section className="col-span-3 col-start-1 row-span-[1.25] bg-[#252525] min-h-0 overflow-hidden">
          <Panel title="Hierarchy"></Panel>
        </section>
        {/* 3D Viewport Panel */}
        <section className="col-span-6 col-start-4 bg-[#252525] min-h-0 overflow-hidden ">
          <Panel title="Scene"></Panel>
          <Canvas
            style={{ width: "100%", height: "100%" }}
            camera={{
              position: [0, 1, 8],
              fov: 30,
            }}
          >
            <Grid 
              args={[10, 10]}
              infiniteGrid={true}
              followCamera={true}
            />
            <color attach="background" args={["white"]}></color>
            <ambientLight intensity={3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls />
            <CreateCylinder 
              radiusTop={1}
              radiusBottom={1}
              height={0.25}
              radialSegments={32}
              color="#ff1100"
            > </CreateCylinder>
          </Canvas>
        </section>
        {/* Object Properties Panel */}
        <section className="col-span-3 col-start-10 row-span-2 bg-[#252525] min-h-0 overflow-hidden">
          <Panel title="Inspector"></Panel>
        </section>
        {/* Graphs and Diagrams Panel */}
        <section className="col-span-9 col-start-1 bg-[#252525] min-h-0 overflow-hidden">
          <Panel title="Profiles"></Panel>
        </section>
      </div>
    </>
  );
}

export default App;
