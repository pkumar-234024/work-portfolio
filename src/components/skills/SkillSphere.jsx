// SkillSphere.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const SkillSphere = ({ category }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!category || !category.skills || category.skills.length === 0) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(200, 200);
    renderer.setClearColor(0x000000, 0);

    // Clear any existing canvas
    if (mountRef.current.childNodes.length > 0) {
      mountRef.current.removeChild(mountRef.current.childNodes[0]);
    }

    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false;

    // Camera position
    camera.position.z = 5;

    // Create sphere
    const sphereGeometry = new THREE.SphereGeometry(2, 24, 24);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Add skill points
    const skills = category.skills;
    const totalSkills = skills.length;

    // Get category color
    let categoryColor;
    switch (category.title) {
      case "Programming Languages":
        categoryColor = 0x3498db;
        break;
      case "Frontend Technologies":
        categoryColor = 0xe74c3c;
        break;
      case "Backend Technologies":
        categoryColor = 0x2ecc71;
        break;
      case "Tools & Environments":
        categoryColor = 0xf39c12;
        break;
      case "Core Competencies":
        categoryColor = 0x9b59b6;
        break;
      default:
        categoryColor = 0x6c5ce7;
    }

    skills.forEach((skill, index) => {
      // Calculate position on sphere using fibonacci distribution
      const phi = Math.acos(-1 + (2 * index) / totalSkills);
      const theta = Math.sqrt(totalSkills * Math.PI) * phi;

      const x = 2.2 * Math.cos(theta) * Math.sin(phi);
      const y = 2.2 * Math.sin(theta) * Math.sin(phi);
      const z = 2.2 * Math.cos(phi);

      // Create point
      const pointGeometry = new THREE.SphereGeometry(0.08, 16, 16);
      const pointMaterial = new THREE.MeshBasicMaterial({
        color: categoryColor,
      });
      const point = new THREE.Mesh(pointGeometry, pointMaterial);

      point.position.set(x, y, z);
      scene.add(point);

      // Add text sprite for skill name
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 256;
      canvas.height = 64;

      context.font = "bold 20px Arial";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText(skill.name, 128, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
      });

      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.set(x * 1.3, y * 1.3, z * 1.3);
      sprite.scale.set(1, 0.25, 1);
      scene.add(sprite);
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Auto-rotate slowly
      sphere.rotation.y += 0.003;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const size = Math.min(200, window.innerWidth - 40);
      renderer.setSize(size, size);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [category]);

  return <div className="skill-sphere-container" ref={mountRef}></div>;
};

export default SkillSphere;
