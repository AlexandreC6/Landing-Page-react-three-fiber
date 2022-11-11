/*  "The tasty slice of salami pizza with cheese" (https://skfb.ly/6UArN) by Constantine is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */

import * as THREE from "three";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { useRef, useState, Suspense } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField} from "@react-three/postprocessing";

function Pizzas({ z }) {
  const ref = useRef();

  const { nodes, materials } = useGLTF("/public/pizza-v1-transformed.glb");

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
    <group ref={ref} position={[-0.36, 0.07, -0.41]} rotation={[0.88, -0.22, 0.05]} scale={[4.61, 0.1, 4.61]}>
      <group position={[0.07, 3.65, -0.35]}>
        <mesh geometry={nodes.Object_1.geometry} material={materials.Cheese_Mat} />
        <mesh geometry={nodes.Object_1_1.geometry} material={materials.Dough_Mat} />
        <mesh geometry={nodes.Object_1_2.geometry} material={materials.Sauce_Mat} />
        <mesh geometry={nodes.Object_1_3.geometry} material={materials.Salami_Mat} />
      </group>
    </group>
  );
}

export default function App({ count = 200, depth = 100 }) {
  return (
    <Canvas gl={{alpha: false}} camera={{near: 0.01, far: 110, fov: 50}}>
      <color attach="background" args={["#ffbf40"]}/>
      <spotLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        {Array.from({ length: count }, (_, i) => (
          <Pizzas key={i} z={-(i / count) * depth - 10} />
        ))}
        <EffectComposer>
          <DepthOfField target={[0, 0 , depth / 2]} focalLength={0.5} bokehScale={20} height={700} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
