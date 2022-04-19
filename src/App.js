import "./App.css";
import { useEffect, useState } from "react";

import { Canvas } from "react-three-fiber";
import { Suspense } from "react";

import { Physics } from "@react-three/cannon";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Background from "./components/Background";
import ColorPicker from "./components/ColorPicker";
import Car from "./components/Car";
import CameraControl from "./components/CameraControl";
import CameraButton from "./components/CameraButton";
import Lights from "./components/Lights";
import Effects from "./components/Effects";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <CameraButton />
      <Canvas
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
        shadows
      >
        <Suspense fallback={null}>
          <Background />
        </Suspense>

        <CameraControl />
        <Lights />

        <Orbit />
        <axesHelper args={[5]} />
        <Physics>
          <Car />
          <Floor position={[0, -0.5, 0]} />
        </Physics>

        <Effects />
      </Canvas>
    </div>
  );
}

export default App;
