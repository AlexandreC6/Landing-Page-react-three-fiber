/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/banana-v1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.banana_high.geometry} material={materials.skin} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.banana_mid.geometry} material={materials.skin} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.banana_low.geometry} material={materials.skin} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/banana-v1-transformed.glb')