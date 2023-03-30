import React, { useState } from "react";
import "./App.css";

export default function AppXY() {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    setXY({ x: e.clientX, y: e.clientY });
  };
  return (
    <div className="container" onMouseMove={handleMouse}>
      <div
        className="pointer"
        style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}
      ></div>
    </div>
  );
}
