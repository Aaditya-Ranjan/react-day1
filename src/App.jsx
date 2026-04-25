import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ComponentsPage from "./pages/ComponentsPage";
import DataBindingPage from "./pages/DataBindingPage";
import HelloWorldPage from "./pages/HelloWorldPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/global.css";

function App() {
  return (
    <Routes>
      {/* [Aaditya]: Layout wraps all routes with shared navigation and global styling. */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="hello-world" element={<HelloWorldPage />} />
        <Route path="data-binding" element={<DataBindingPage />} />
        <Route path="components" element={<ComponentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
