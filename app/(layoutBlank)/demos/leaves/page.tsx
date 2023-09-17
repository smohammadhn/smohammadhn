'use client'
import './page.scss'

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from '@react-three/postprocessing'

import { Model } from '@/public/models/autumn-leaves/Model'

import { Suspense } from 'react'

export default function Butterflies() {
  return (
    <main className="fullScreen">
      <Suspense fallback={<span>loading...</span>}>
        <Canvas className="my-canvas">
          <color attach="background" args={[0x1f1f21]} />
          <ambientLight intensity={1} />
          <Environment preset="warehouse" />

          <spotLight
            position={[0, 10, 0]}
            penumbra={1}
            castShadow
            intensity={400}
            shadow-bias={-0.0001}
          />

          <EffectComposer>
            <Bloom
              intensity={0.5}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
            />
            <DepthOfField focusDistance={0} focalLength={0.05} bokehScale={3} />
          </EffectComposer>

          <Model position={[0, -3, 0]} scale={0.2} />
        </Canvas>
      </Suspense>
    </main>
  )
}
