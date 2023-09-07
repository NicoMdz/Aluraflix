import Home from "./pages/Home";
import NuevoVideo from "./pages/NuevoVideo";
import NuevaCategoria from "./pages/NuevaCategoria";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/nuevo-video" element={<NuevoVideo />} />
         <Route path="/nueva-categoria" element={<NuevaCategoria />} />
      </Routes>
    </Router>
  );
}

export default App;
