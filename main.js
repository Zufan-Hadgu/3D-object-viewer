import { initScene } from './scripts/initScene.js';
import { createProduct } from './scripts/createProduct.js';
import { addLights } from './scripts/addLighting.js';
import { autoRotateCamera } from './scripts/cameraAnimation.js';

const canvas = document.querySelector('#webgl');
const { scene, camera, renderer, controls } = initScene(canvas);

createProduct(scene);
addLights(scene);

let startTime = Date.now();

function animate() {
  const currentTime = Date.now();
  autoRotateCamera(camera, currentTime - startTime);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
