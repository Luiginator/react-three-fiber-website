export type TBox = {
  readonly position: number[];
  readonly rotationSpeed: number;
  readonly color: string;
};

export function getCode(
  geometry: string,
  material: string,
  boxes: TBox[]
): string {
  const geometryMap = {
    box: {
      name: "boxBufferGeometry",
      constructor: "[1, 1, 1]",
    },
    cylinder: {
      name: "cylinderBufferGeometry",
      constructor: "[2, 2, 2, 30]",
    },
  };

  const { name, constructor } = geometryMap[geometry];

  return `  import React, { useRef, useState } from 'react'
  import { Canvas, useFrame } from 'react-three-fiber'
  
  ${getBoxCode(name, constructor, material)}
  ${getAppCode(boxes)}
`;
}

function getBoxCode(name: string, constructor: string, material: string) {
  return `function Box({ position, rotationSpeed, color }) {
        const mesh = useRef()
        const [active, setActive] = useState(false)
    
        useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += rotationSpeed / 100))
    
        return (
            <mesh
                position={position}
                ref={mesh}
                scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
                onClick={e => setActive(!active)}>
                <${name}BufferGeometry attach="geometry" args={${constructor}} />
                <${material} attach="material" color={color}/>
            </mesh>
        )
    }
    `;
}

function getAppCode(boxes: TBox[]): string {
  return `export default function App() {
        return <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
        ${boxes.map(getBoxLineCode).join("\n\t")}
        </Canvas>
    }`;
}

function getBoxLineCode(box: TBox): string {
  return `    <Box position={${JSON.stringify(box.position)}} rotationSpeed={${
    box.rotationSpeed
  }} color="${box.color}" />`;
}
