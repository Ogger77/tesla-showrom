import * as THREE from "three";
import state from "../state";

const ColorPicker = (props) => {
  const handleClick = (e) => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 999,
        left: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",
        display: "flex",
        top: "20px",
      }}
    >
      <div
        onClick={handleClick}
        style={{ background: "rgb(243, 246, 247)", height: 50, width: 50 }}
      ></div>
      <div
        onClick={handleClick}
        style={{ background: "rgb(30, 75, 93)", height: 50, width: 50 }}
      ></div>
      <div
        onClick={handleClick}
        style={{ background: "#000d89", height: 50, width: 50 }}
      ></div>
    </div>
  );
};

export default ColorPicker;
