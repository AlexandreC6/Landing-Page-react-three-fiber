/*  "The tasty slice of salami pizza with cheese" (https://skfb.ly/6UArN) by Constantine is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */

import * as THREE from "three";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { useRef, useState, Suspense } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField} from "@react-three/postprocessing";

function Jordans({ z }) {
  const ref = useRef();

  const { nodes, materials } = useGLTF('/jordan-v1-transformed.glb');


  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set((data.rX += 0.001), (data.rY += 0.004), (data.rZ += 0.005))
    ref.current.position.set(data.x * width, (data.y += 0.05), z);
    if (data.y > height) {
      data.y = -height;
    }
  });

  return (
    <group ref={ref} scale={20}>
      <mesh geometry={nodes.shoe_shoe_0_1.geometry} material={materials.shoe} />
      <mesh geometry={nodes.shoe_shoe_0_2.geometry} material={materials.shoelace} />
    </group>
  );
}

export default function App({ count = 100, depth = 100 }) {
  return (
    <Canvas gl={{alpha: false}} camera={{near: 0.01, far: 110, fov: 50}}>
      <color attach="background" args={["#746B65"]}/>
      <spotLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        {Array.from({ length: count }, (_, i) => (
          <Jordans key={i} z={-(i / count) * depth - 10}/>
        ))}
        <EffectComposer>
          <DepthOfField target={[0, 0 , depth / 2]} focalLength={0.5} bokehScale={10} height={700} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
