import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ── Data version reset ──────────────────────────────────────────────────────
// If the stored version doesn't match, wipe ALL admin_ keys so stale
// Azariel data (principal names, contact info, etc.) is purged and
// the Azariel defaults in storage.ts take effect immediately.
const DATA_VERSION = 'azariel-v1';
if (localStorage.getItem('data_version') !== DATA_VERSION) {
  Object.keys(localStorage)
    .filter(k => k.startsWith('admin_') || k.startsWith('azariel_'))
    .forEach(k => localStorage.removeItem(k));
  localStorage.setItem('data_version', DATA_VERSION);
}
// ────────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
