import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";

function CarModel({ url }) {
  const { scene } = useGLTF(url);
  const carRef = useRef();

  // Rotate the car slowly
  useFrame(() => {
    if (carRef.current) {
      carRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={carRef} object={scene} />;
}

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -200]); // scroll animation for text

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <Stage environment="city" intensity={0.7} preset="rembrandt">
          <CarModel url="/models/2020_honda_nsx_na1_lbworks.glb" />
        </Stage>
      </Canvas>

      {/* Overlay Text & Buttons */}
      <motion.div
        style={{ y: yPos }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center text-black px-4 "
      >
        <h1 className="text-5xl font-bold mb-4">Experience the New NSX</h1>
        <p className="text-lg mb-6">
          Explore the perfect combination of power, style, and technology.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-red-500 px-6 py-2 rounded text-white font-semibold hover:bg-red-600 transition">
            Buy Now
          </button>
          <button className="border border-white px-6 py-2 rounded text-white font-semibold hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
