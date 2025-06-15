
import * as THREE from 'three';

export function setupInteraction(renderer, scene, camera) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      object.material.color.set(Math.random() * 0xffffff); // Change color
      object.scale.set(1.2, 1.2, 1.2); // Temporarily scale up
      setTimeout(() => object.scale.set(1, 1, 1), 300);
      console.log(`Clicked on: ${object.name || 'Unnamed part'}`);
    }
  }

  renderer.domElement.addEventListener('click', onClick);
}
