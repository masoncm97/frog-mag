"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Configuration for the fibers
const FIBER_CONFIG = {
  numFibers: 5,
  fiberLength: 100,
  pointsPerFiber: 800,
  spaceScale: 15,
  colors: [
    "#FF1493", // neon pink
    "#00FFFF", // cyan
    "#FFFF00", // highlighter yellow
    "#FF6EFF", // hot pink
    "#39FF14", // neon green
  ],
  amplitude: 0.8,
  frequency: 0.003,
  speed: 0.002,
  curveSegments: 35,
  chaos: 0.5,
};

export default function FiberScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Make background transparent
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create fibers
    const fibers: THREE.Line[] = [];
    const fiberSeeds = Array(FIBER_CONFIG.numFibers)
      .fill(0)
      .map(() => Math.random() * 1000);

    for (let i = 0; i < FIBER_CONFIG.numFibers; i++) {
      const controlPoints = [];
      const colorIndex = i % FIBER_CONFIG.colors.length;

      // Create smoother control points with smaller increments
      for (let j = 0; j < FIBER_CONFIG.curveSegments; j++) {
        const t = j / (FIBER_CONFIG.curveSegments - 1);
        // Add some smooth noise to the position
        const noise =
          Math.sin(t * Math.PI * 2 + fiberSeeds[i]) * FIBER_CONFIG.chaos;
        const x = (Math.random() - 0.5 + noise) * FIBER_CONFIG.spaceScale;
        const y = (Math.random() - 0.5 + noise) * FIBER_CONFIG.spaceScale;
        const z = (Math.random() - 0.5 + noise) * FIBER_CONFIG.spaceScale;

        controlPoints.push(new THREE.Vector3(x, y, z));
      }

      // Use chordal parameterization for even smoother curves
      const curve = new THREE.CatmullRomCurve3(controlPoints, false, "chordal");
      const points = curve.getPoints(FIBER_CONFIG.pointsPerFiber);

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: FIBER_CONFIG.colors[colorIndex],
        linewidth: 1,
      });

      const fiber = new THREE.Line(geometry, material);
      fibers.push(fiber);
      scene.add(fiber);
    }

    // Position camera
    camera.position.z = 20; // Moved camera back to accommodate larger spread

    // Animation
    let time = 0;
    function animate() {
      requestAnimationFrame(animate);

      time += FIBER_CONFIG.speed;

      fibers.forEach((fiber, index) => {
        const positions = fiber.geometry.attributes.position
          .array as Float32Array;
        const seed = fiberSeeds[index];

        for (let i = 0; i < positions.length; i += 3) {
          const normalizedI = i / positions.length;
          const offset = normalizedI * FIBER_CONFIG.frequency + time + seed;

          // Create smooth but complex movement patterns
          const noise1 = Math.sin(offset * 2.1) * Math.cos(offset * 1.7);
          const noise2 = Math.cos(offset * 1.3) * Math.sin(offset * 2.3);
          const noise3 = Math.sin(offset * 1.9) * Math.cos(offset * 2.5);

          // Apply smooth easing to the movement
          const ease = (t: number) => t * t * (3 - 2 * t); // Smooth step function
          const phase = ease(normalizedI);

          positions[i + 0] += noise1 * FIBER_CONFIG.amplitude * 0.02 * phase;
          positions[i + 1] += noise2 * FIBER_CONFIG.amplitude * 0.02 * phase;
          positions[i + 2] += noise3 * FIBER_CONFIG.amplitude * 0.02 * phase;
        }

        fiber.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    }

    // Handle window resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
      fibers.forEach((fiber) => {
        fiber.geometry.dispose();
        (fiber.material as THREE.Material).dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
