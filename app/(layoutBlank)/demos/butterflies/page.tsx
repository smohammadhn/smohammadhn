'use client'
import './page.scss'

import { Environment, Float, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Vignette,
} from '@react-three/postprocessing'

import { Model } from '@/public/models/autumn-leaves/Model'

import { Suspense } from 'react'

export default function Butterflies() {
  return (
    <main className="fullScreen">
      <Suspense>
        <Canvas>
          <color attach="background" args={[0, 0, 0]} />
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
            <Vignette eskil={false} offset={0.05} darkness={1.5} />
          </EffectComposer>

          <ScrollControls pages={3} damping={0.25}>
            <Scroll>
              <Float>
                <Model position={[0, -3, 0]} scale={0.2} />
              </Float>
            </Scroll>

            <Scroll html style={{ width: '100%' }}>
              <div className="container">
                <div className="block-text">sometimes you can feel</div>
                <div className="block-text">sometimes you can feel2</div>
                <div className="block-text">sometimes you can feel3</div>
              </div>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </main>
  )
}
