import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, type CanvasProps, useFrame } from '@react-three/fiber'
import { random } from 'maath'
import { Suspense, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { useTheme } from '@/components/global/theme-provider'

const Stars = () => {
  const { theme } = useTheme()
  const ref = useRef<any>(null)
  const [sphere] = useState(() => random.inSphere(new Float32Array(3003), { radius: 1.2 }))
  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  if (!sphere) return
  return (
    // eslint-disable-next-line react/no-unknown-property
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points frustumCulled ref={ref} positions={sphere as any} stride={3}>
        <PointMaterial
          transparent
          color={theme == 'dark' ? 'white' : 'black'}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const CanvasStars = ({ ...props }: Omit<CanvasProps, 'children'>) => {
  const [ref, inView] = useInView({ rootMargin: '200px' })
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      ref={ref}
      {...props}
      frameloop={inView ? 'always' : 'never'}
    >
      <Suspense>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default CanvasStars
