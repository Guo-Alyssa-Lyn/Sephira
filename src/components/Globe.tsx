'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function InteractiveGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const sceneRef = useRef<THREE.Scene | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const baseRotationSpeed = useRef(0.005); // Base rotation speed constant

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });

    // Sphere creation
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 128, 128),
      new THREE.MeshStandardMaterial({
        color: '#0A1128',
        emissive: '#1E3A8A',
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.95
      })
    );
    scene.add(sphere);

    // Surface dots
    const dotGeometry = new THREE.BufferGeometry();
    const positions = [];
    for (let i = 0; i < 3000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 1.002;
      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }
    dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const dots = new THREE.Points(
      dotGeometry,
      new THREE.PointsMaterial({
        size: 0.012,
        color: '#60A5FA',
        opacity: 0.8,
        transparent: true
      })
    );
    scene.add(dots);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 3, 5);
    scene.add(ambientLight, directionalLight);

    camera.position.z = 2.5;
    sceneRef.current = scene;
    sphereRef.current = sphere;

    // Mouse interaction handler
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width/2) / (rect.width/2);
      const y = -(event.clientY - rect.top - rect.height/2) / (rect.height/2);
      
      // Update target rotation with dampened values
      targetRotation.current = {
        x: y * 0.25,  // Vertical mouse affects X rotation
        y: x * 0.25   // Horizontal mouse affects Y rotation
      };
    };

    // Renderer setup
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    containerRef.current.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!sphereRef.current) return;

      // Apply continuous base rotation
      sphereRef.current.rotation.y += baseRotationSpeed.current;

      // Smoothly interpolate toward mouse-driven rotation
      sphereRef.current.rotation.x += (targetRotation.current.x - sphereRef.current.rotation.x) * 0.05;
      sphereRef.current.rotation.y += (targetRotation.current.y - sphereRef.current.rotation.y) * 0.05;

      // Sync dots with sphere rotation
      dots.rotation.copy(sphereRef.current.rotation);
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[600px]" />;
}