import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

// Simple offline indicator
function showOfflineStatus() {
  const status = document.createElement('div');
  status.id = 'offline-status';
  status.textContent = navigator.onLine ? 'Ready for offline use' : 'Offline mode active';
  status.style.cssText = 'position:fixed;top:8px;right:8px;background:#0ea5e9;color:#fff;padding:4px 8px;border-radius:4px;font-size:12px;';
  document.body.appendChild(status);
  window.addEventListener('online', () => { if(status) status.textContent = 'Ready for offline use'; });
  window.addEventListener('offline', () => { if(status) status.textContent = 'Offline mode active'; });
}

// Basic Three.js scene setup placeholder
async function initScene() {
  try {
    const THREE = await import('three');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    app.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0ea5e9 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 3;

    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  } catch (e) {
    app.innerHTML = '<p style="padding:1rem;">Loading 3D engine… If this persists, check your connection and reload.</p>';
  }
}

showOfflineStatus();
initScene();
