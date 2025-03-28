// components/Background3D.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Colors from the existing palette
    const colors = [
      new THREE.Color(0x4f46e5), // Indigo
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x8b5cf6), // Purple
    ];

    // Create particle wave system
    const particleCount = 10000;
    const particles = new THREE.BufferGeometry();

    // Create arrays for particle positions and colors
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    // Grid dimensions
    const gridSize = Math.sqrt(particleCount);
    const spacing = 0.5;

    // Create grid of particles
    for (let i = 0; i < particleCount; i++) {
      const x = ((i % gridSize) - gridSize / 2) * spacing;
      const z = (Math.floor(i / gridSize) - gridSize / 2) * spacing;
      const y = 0; // Initial y position (will be animated)

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Assign colors based on position
      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = colors[colorIndex];

      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create the particle system
    const particleSystem = new THREE.Points(particles, particleMaterial);
    particleSystem.rotation.x = -Math.PI / 4; // Tilt the wave
    scene.add(particleSystem);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x4f46e5, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 1, 100);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      targetRotationX = mouseY * 0.2;
      targetRotationY = mouseX * 0.2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Update particle positions to create wave effect
      const positions = particles.attributes.position.array;
      const time = Date.now() * 0.0005;

      for (let i = 0; i < particleCount; i++) {
        const ix = i % gridSize;
        const iz = Math.floor(i / gridSize);

        // Create wave pattern
        const xOffset = (ix / gridSize) * 10;
        const zOffset = (iz / gridSize) * 10;

        // Wave equation with multiple sine waves for more complex pattern
        positions[i * 3 + 1] =
          Math.sin(time + xOffset) * 2 +
          Math.sin(time * 0.5 + zOffset) * 2 +
          Math.sin(time * 0.2 + xOffset + zOffset) * 1;
      }

      particles.attributes.position.needsUpdate = true;

      // Smooth camera rotation based on mouse position
      camera.position.x += (mouseX * 10 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 10 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Rotate the entire particle system slowly
      particleSystem.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "linear-gradient(45deg, #000428 0%, #004e92 100%)",
      }}
    />
  );
};

export default Background3D;
