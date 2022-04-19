import { Suspense } from "react";
import Model from "../components/Model";
import Dragable from "./Dragable";
import BoundingBox from "../components/BoundingBox";

const Car = () => {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          // visible
          position={[4, 4, 0]}
          dims={[3, 2, 6]}
          offset={[0, -0.3, 0.8]}
        >
          <Model
            path="/tesla_model_3/scene.gltf"
            scale={new Array(3).fill(0.01)}
          />
        </BoundingBox>
      </Dragable>

      <Dragable transformGroup>
        <BoundingBox
          // visible
          position={[-4, 4, 0]}
          dims={[3, 2, 6]}
          offset={[0, 0.2, 0.2]}
        >
          <Model
            path="/tesla_cybertruck/scene.gltf"
            scale={new Array(3).fill(0.01)}
          />
        </BoundingBox>
      </Dragable>

      {/* <Dragable transformGroup>
        <BoundingBox
          // visible
          position={[0, 4, 0]}
          dims={[3, 2, 6]}
          offset={[0, 0.2, 0.2]}
        >
          <Model
            path="/tesla_cybertruck/scene.gltf"
            scale={new Array(3).fill(0.01)}
          />
        </BoundingBox>
      </Dragable> */}
    </Suspense>
  );
};

export default Car;
