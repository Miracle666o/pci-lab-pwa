# PCI Lab — Offline Mobile Simulator

Touch-first, offline-capable browser simulation of PCI for education.

> **Education and demonstration only.** Not clinical training, medical advice, or a substitute for supervised instruction.

## How to use (students)

1. Open this URL in your mobile browser (on Wi‑Fi):  
   `https://Miracle666o.github.io/pci-lab-pwa/`
2. Wait for the page to load once.
3. After that, it works **even with no internet** (airplane mode, poor campus network).

Colleges can pre-load this URL on shared tablets and lab PCs. After the first load, no connection is required.

## Run locally (developers)

```bash
npm install
npm run dev
```

Then open the local address printed by Vite.

## Build and test

```bash
npm run build
npm test
```

## Offline behavior

This is a Progressive Web App (PWA). On first load it caches all assets via a service worker. Subsequent visits run fully offline.

---

*Built from the original pci-ios-simulator concept, adapted for offline-first mobile access.*
