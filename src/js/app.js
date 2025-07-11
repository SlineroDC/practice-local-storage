// ✅ Import core modules
import './modules/utils.js';
import './modules/api.js';
import './modules/auth.js';
import './modules/router.js';
import './modules/petManager.js';
import './modules/stayManager.js';
import { renderRoute } from './modules/router.js';

// ✅ App entry point
document.addEventListener('DOMContentLoaded', () => {
  console.log('🟢 App initialized');

  renderRoute()
  // Puedes iniciar el router, comprobar auth, etc.
  // Por ejemplo:
  // checkSession(); 
  // initRouter();
});


