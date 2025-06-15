import * as THREE from 'three';

export function createProduct(scene) {
  const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa }); 
  const shadeMaterial = new THREE.MeshStandardMaterial({ color: 0xffe4b5, transparent: true, opacity: 0.6 });

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.2, 32), material);
  base.position.y = 0.1;
  scene.add(base);

  const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2, 16), material);
  stand.position.y = 1.2; 
  scene.add(stand);

  const shade = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1, 32), shadeMaterial);
  shade.position.y = 2.2; 
  scene.add(shade);

  const bulbLight = new THREE.PointLight(0xfff1cc, 1, 5); 
  bulbLight.position.set(0, 2.2, 0);
  scene.add(bulbLight);

 
  const bulb = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 16, 16),
    new THREE.MeshStandardMaterial({ emissive: 0xffffaa, emissiveIntensity: 1, color: 0x222222 })
  );
  bulb.position.set(0, 2.2, 0);
  scene.add(bulb);
}
