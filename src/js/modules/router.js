import { getCurrentUser } from "./storage.js";
import { initLogin } from "./auth.js";
// En el futuro puedes importar también: initRegister, initDashboard, etc.

const routes = {
  "/": { path: "/index.html", roles: ["guest", "customer", "worker", "admin"] },
  "/login": { path: "/views/login.html", roles: ["guest"] },
  "/register": { path: "/views/register.html", roles: ["guest"] },
  "/notFound": { path: "/views/404.html", roles: ["guest"] },
  "/accessDenied": { path: "/views/403.html", roles: ["guest", "customer", "worker", "admin"] },
  "/customer": { path: "/views/dashboard/customer.html", roles: ["customer"] },
  "/worker": { path: "/views/dashboard/worker.html", roles: ["worker"] },
  "/instances": { path: "/views/dashboard/instances.html", roles: ["worker", "admin"] },
  "/users": { path: "/views/dashboard/users.html", roles: ["admin"] }
};

export async function renderRoute() {
  const app = document.getElementById("app-content");
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    console.log("mesi")
    const notFound = await fetch(routes["/notFound"].path);
    app.innerHTML = await notFound.text();
    return;
  }

  const user = getCurrentUser();

  // 🔐 Si no hay usuario logueado y la ruta no es pública → redirigir al login
  if (!user && !route.roles.includes("guest")) {
    window.history.pushState({}, "", "/login");
    return renderRoute(); // 🔁 vuelve a renderizar la ruta del login
  }

  // 🛡️ Validación de rol
  const currentRole = user ? user.role : "guest";
  const isAuthorized = route.roles.includes(currentRole);

  // if (!isAuthorized) {
  //   const denied = await fetch(routes["/accessDenied"].path);
  //   console.log(denied)
  //   app.innerHTML = await denied.text();
  //   return;
  // }

  try {
    const file = await fetch(route.path);
    const content = await file.text();
    app.innerHTML = content;

    // ✅ Inicialización específica por ruta
    if (path === "/login") initLogin();
    // Puedes ir agregando más según necesites:
    // if (path === "/register") initRegister();
    // if (path === "/customer") initCustomerDashboard();
    // etc.
  } catch (error) {
    app.innerHTML = `<h2>Error loading route content.</h2>`;
    console.error("Routing error:", error);
  }
}
