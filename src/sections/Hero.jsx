import HeroText from "../components/HeroText";
import Astronaut from "../components/Astronaut";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { Suspense } from "react";
import { Loader } from "../components/Loader";
import { Pointer } from "../components/pointer.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="relative flex items-start justify-center md:items-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0 "
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.2}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <Rig />
        </Canvas>
      </figure>
      <Pointer>
        <div className="text-2xl w-10 h-10 backdrop-filter border-white-100  border-5 bg-burn-color backdrop-invert-100 rounded-full"></div>
      </Pointer>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 5, 1 + state.mouse.y / 5, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
