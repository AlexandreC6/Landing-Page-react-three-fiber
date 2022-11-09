import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

function Box() {
  const [clicked, setClicked] = useState(false)

  const ref = useRef();
  useFrame((state) => {
    ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, clicked ? 3 : 0, 0.2)
  })

  return (
    <mesh ref={ref} onClick={() => {setClicked(!clicked)}}>
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  )
}
