import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'

function Box({ z }) {

  const ref = useRef();
  const {viewport, camera} = useThree()
  const {width, height} = viewport.getCurrentViewport(camera, [0, 0, z])


  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
  })

  useFrame((state) => {
    ref.current.position.set(data.x * width, (data.y += 0.5), z);
    if (data.y >  height / 1.5) {
      data.y = - height / 1.5
    }
  })

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  )
}

function Test() {
  const {viewport, camera} = useThree()
  const {width, height} = viewport.getCurrentViewport(camera, [0, 0, 0])

  return <mesh position={[0, 0, -10]} scale={[viewport.width, viewport.height, 1]}>
    <planeGeometry />
    <meshBasicMaterial color="orange"/>
  </mesh>
}

export default function App({count = 100}) {
  return (
    <Canvas>
      {Array.from({length: count}, (_,i) => (<Box key={i} z={-i}/>))}
      {/* <Test /> */}
    </Canvas>
  )
}
