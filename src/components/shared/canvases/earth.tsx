import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas as FiberCanvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useInView } from 'react-intersection-observer'

const Earth = ({ inView }: { inView: boolean }) => {
  const earth = useGLTF('/planet/scene.gltf')
  // eslint-disable-next-line react/no-unknown-property
  return inView && <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
}

const CanvasEarth = () => {
  const [ref, inView] = useInView({ rootMargin: '200px' })
  return (
    <FiberCanvas
      shadows
      frameloop={inView ? 'demand' : 'never'}
      dpr={[1, 2]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
      gl={{ preserveDrawingBuffer: true }}
      className="size-fit"
      ref={ref}
    >
      <Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          rotateSpeed={0.3}
          enabled={inView ? true : false}
        />
        <Earth inView={inView} />
      </Suspense>

      <Preload all />
    </FiberCanvas>
  )
}

export default CanvasEarth
