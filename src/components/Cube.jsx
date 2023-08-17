import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Shape, Vector3, ExtrudeBufferGeometry, MeshStandardMaterial } from "three";

const Cube = () => {
  const textRef = useRef();
  useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1));

  
  const createStarShape = () => {
    const starShape = new Shape();

   
    const outerRadius = 6;

  
    const innerRadius = 2.5;

  
    const points = 5;

   
    const angleStep = (Math.PI * 2) / points;


    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = i * angleStep - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (i === 0) starShape.moveTo(x, y);
      else starShape.lineTo(x, y);
    }

    starShape.closePath();

    return starShape;
  };

  const geometry = new ExtrudeBufferGeometry(createStarShape(), { depth: 1, bevelEnabled: false });
  const material = new MeshStandardMaterial({ color: "#ae0473" });

  return (
    <mesh scale={[0.1, 0.1, 0.1]} geometry={geometry} material={material}>
      <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0, 0, 9]} />
        <color attach="background" args={["#ec0eb8"]} />
        <Text ref={textRef} fontSize={3} color="#ffffff">
          Olá
        </Text>
      </RenderTexture>
    </mesh>
  );
};



export default Cube;