/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera }  from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import  CanvasLoader  from '../components/CanvasLoader';
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const x = useControls('Hacker Room', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },

    rotationX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    
    scale: {
      value: 1,
      min: 0.1,
      max: 10,
    },
  });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I&apos;m Kaesy<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient text-center">Classic Style with a Modern Edge</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HackerRoom
              position={[x.positionX, x.positionY, x.positionZ]}
              rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              scale={[x.scale, x.scale, x.scale]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Hero;