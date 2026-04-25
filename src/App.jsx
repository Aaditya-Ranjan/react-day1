import HelloWorld from "./components/HelloWorld";
import DataBinding from "./components/DataBinding";
import ComponentsDemo from "./components/ComponentsDemo";
import "./styles/global.css";

function App() {
  return (
    <main className="app-shell">
      {/* [Aaditya]: HelloWorld app setup rendered as the first React learning problem. */}
      <HelloWorld />
      {/* [Aaditya]: Data binding examples are rendered after the initial setup. */}
      <DataBinding />
      {/* [Aaditya]: Component examples show props, composition, and list rendering. */}
      <ComponentsDemo />
    </main>
  );
}

export default App;
