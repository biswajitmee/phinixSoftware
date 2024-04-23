import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

 function Box() {
    return (
      <Canvas style={{ width:"100vw",  backgroundColor:"#000", }}>
        <group>
          <mesh>
            <meshNormalMaterial />
            <boxGeometry args={[5, 3, 5]} />
          </mesh>
        </group>
      </Canvas>
    )
  }
  export default Box;

 

 