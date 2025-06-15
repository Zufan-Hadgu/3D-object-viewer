
export function autoRotateCamera(camera, time) {
  const radius = 5;
  const speed = 0.0005; 
  const angle = speed * time;
  camera.position.x = radius * Math.sin(angle);
  camera.position.z = radius * Math.cos(angle);
  camera.lookAt(0, 1, 0);
}
