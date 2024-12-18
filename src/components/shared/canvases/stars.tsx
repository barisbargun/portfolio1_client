import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, CanvasProps, useFrame } from '@react-three/fiber'
import { useInView } from 'framer-motion'
// @ts-expect-error no types
import * as random from 'maath/random/dist/maath-random.esm'
import { Suspense, useRef, useState } from 'react'

import { useTheme } from '@/components/global/theme-provider'

const Stars = () => {
  const { theme } = useTheme()
  const ref = useRef<any>()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }))
  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  if (sphere)
    return (
      // eslint-disable-next-line react/no-unknown-property
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points frustumCulled ref={ref} positions={sphere} stride={3}>
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
  const ref = useRef(null)
  const inView = useInView(ref)
  return (
    <Canvas camera={{ position: [0, 0, 1] }} ref={ref} {...props}>
      {inView && (
        <Suspense>
          <Stars />
        </Suspense>
      )}
      <Preload all />
    </Canvas>
  )
}

export default CanvasStars
