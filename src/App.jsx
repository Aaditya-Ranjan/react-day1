import HelloWorld from "./components/HelloWorld";
import DataBinding from "./components/DataBinding";
import "./styles/global.css";

function App() {
  return (
    <main className="app-shell">
      {/* [Aaditya]: HelloWorld app setup rendered as the first React learning problem. */}
      <HelloWorld />
      {/* [Aaditya]: Data binding examples are rendered after the initial setup. */}
      <DataBinding />
    </main>
  );
}

export default App;
