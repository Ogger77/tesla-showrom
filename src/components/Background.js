import { useLoader, useThree } from "react-three-fiber";
import * as THREE from "three";
import { useMemo } from "react";

const Background = (props) => {
  const texture = useLoader(
    THREE.TextureLoader,
    process.env.PUBLIC_URL + "/autoshop.jpg"
  );

  const { gl } = useThree();

  const formated = useMemo(
    () =>
      new THREE.WebGLCubeRenderTarget(
        texture.image.height
      ).fromEquirectangularTexture(gl, texture),
    []
  );

  return <primitive attach="background" object={formated.texture} />;
};

export default Background;
