import React from "react";
import { useTexture } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Certificado from "../../public/img/comunicação.jpeg";

const Certificado3 = () => {
  const imageTexture = useTexture(Certificado);

  return (
    <>
      <group>
        <mesh position={[0, 0, 0.025]}>
          <planeBufferGeometry args={[8, 5]} />
          <meshBasicMaterial map={imageTexture} />
        </mesh>
      </group>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </>
  );
};

export default Certificado3;