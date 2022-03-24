import Topbar from "./components/topbar/Topbar";
import { Person, Mail } from "@material-ui/icons";

function App() {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
