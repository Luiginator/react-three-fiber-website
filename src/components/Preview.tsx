import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const typeGeometryMap = {
  box: <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />,
  cylinder: <cylinderBufferGeometry attach="geometry" args={[2, 2, 2, 30]} />,
};

function Box({ position, type, material, rotationSpeed, color }) {
  const mesh = useRef();
  const [active, setActive] = useState(false);

  useFrame(
    () =>
      ((mesh.current as any).rotation.x = (mesh.current as any).rotation.y +=
        rotationSpeed / 100),
  );

  const handleClickMesh = () => setActive(!active);

  const Material = material;

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={active ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      onClick={handleClickMesh}
    >
      {typeGeometryMap[type]}
      <Material attach="material" color={color} />
    </mesh>
  );
}

export default function Preview({ type, material, boxes }) {
  return (
    <Canvas
      camera={{ position: [0, -5, 8], fov: 50 }}
      style={{ height: '200px' }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {boxes.map((box, i) => (
        <Box
          key={i}
          position={box.position}
          type={type}
          material={material}
          rotationSpeed={box.rotationSpeed}
          color={box.color}
        />
      ))}
    </Canvas>
  );
}
