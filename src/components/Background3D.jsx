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
    camera.position.z = 20;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create geometric shapes
    const shapes = [];
    const totalShapes = 50;

    // Materials with gradient colors
    const materials = [
      new THREE.MeshPhongMaterial({
        color: 0x4f46e5,
        shininess: 100,
        transparent: true,
        opacity: 0.7,
      }),
      new THREE.MeshPhongMaterial({
        color: 0x06b6d4,
        shininess: 100,
        transparent: true,
        opacity: 0.7,
      }),
      new THREE.MeshPhongMaterial({
        color: 0x8b5cf6,
        shininess: 100,
        transparent: true,
        opacity: 0.7,
      }),
    ];

    // Create different geometric shapes
    for (let i = 0; i < totalShapes; i++) {
      let geometry;
      const random = Math.random();

      if (random < 0.33) {
        // Icosahedron
        geometry = new THREE.IcosahedronGeometry(Math.random() * 0.5 + 0.5);
      } else if (random < 0.66) {
        // Octahedron
        geometry = new THREE.OctahedronGeometry(Math.random() * 0.5 + 0.5);
      } else {
        // Dodecahedron
        geometry = new THREE.DodecahedronGeometry(Math.random() * 0.5 + 0.5);
      }

      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      // Random position
      mesh.position.x = (Math.random() - 0.5) * 30;
      mesh.position.y = (Math.random() - 0.5) * 30;
      mesh.position.z = (Math.random() - 0.5) * 30;

      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      // Store initial position for animation
      mesh.userData.initialY = mesh.position.y;
      mesh.userData.speed = Math.random() * 0.02 + 0.01;
      mesh.userData.amplitude = Math.random() * 1 + 0.5;

      shapes.push(mesh);
      scene.add(mesh);
    }

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

      targetRotationX = mouseY * 0.5;
      targetRotationY = mouseX * 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth camera rotation
      camera.rotation.x += (targetRotationX - camera.rotation.x) * 0.05;
      camera.rotation.y += (targetRotationY - camera.rotation.y) * 0.05;

      // Animate shapes
      shapes.forEach((shape) => {
        // Floating animation
        shape.position.y =
          shape.userData.initialY +
          Math.sin(Date.now() * shape.userData.speed) *
            shape.userData.amplitude;

        // Rotation animation
        shape.rotation.x += 0.005;
        shape.rotation.y += 0.005;
      });

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
