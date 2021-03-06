import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Features from "./components/features/Features";
import Domains from "./components/domains/Domains";
import Pricing from "./components/pricing/Pricing";
import Enterprise from "./components/enterprise/Enterprise";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Features />
        <Domains />
        <Pricing />
        <Enterprise />
      </div>
    </div>
  );
}

export default App;
