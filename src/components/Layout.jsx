import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/hello-world", label: "HelloWorld" },
  { to: "/data-binding", label: "Data Binding" },
  { to: "/components", label: "Components" }
];

function Layout() {
  return (
    <div className="site-frame">
      <header className="topbar">
        <div>
          <strong>React Learning Problems</strong>
          <span>Live Class Practice</span>
        </div>
        <nav aria-label="Main navigation">
          {/* [Aaditya]: NavLink applies active styles based on the current route. */}
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="app-shell">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
