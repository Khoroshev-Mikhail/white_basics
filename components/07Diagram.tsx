// components/ThreeDDiagram.js
import { useEffect } from 'react';
import * as THREE from 'three';

const ThreeDDiagram = () => {
    useEffect(() => {
        // Создание сцены
        const scene = new THREE.Scene();
    
        // Создание камеры
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
    
        // Создание рендерера
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    
        // Создание круга
        const geometry = new THREE.CircleGeometry(1, 32); // Первый аргумент - радиус, второй - количество сегментов
    
        // Основной материал круга (красный)
        const mainMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const mainCircle = new THREE.Mesh(geometry, mainMaterial);
        scene.add(mainCircle);
    
        // Белая обводка круга
        const borderMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide }); // side: THREE.BackSide чтобы обводка находилась сзади
        const borderCircle = new THREE.Mesh(geometry, borderMaterial);
        borderCircle.scale.set(1.05, 1.05, 1); // Увеличиваем размер, чтобы обводка была слегка больше основного круга
        scene.add(borderCircle);
    
        // Анимация
        const animate = () => {
          requestAnimationFrame(animate);
    
          mainCircle.rotation.z += 0.01; // Вращаем основной круг по оси Z
          borderCircle.rotation.z += 0.01; // Вращаем обводку по оси Z
    
          renderer.render(scene, camera);
        };
    
        animate();
    
        // Очистка сцены при размонтировании компонента
        return () => {
          scene.remove(mainCircle);
          scene.remove(borderCircle);
          geometry.dispose();
          mainMaterial.dispose();
          borderMaterial.dispose();
          renderer.dispose();
        };
      }, []);
    
      return null; 
};

export default ThreeDDiagram;
