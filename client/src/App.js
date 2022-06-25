import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      {/* We will be using  react route v6*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        {/* Add more routes here 👍 */}
      </Routes>
    </div>
  );
}

export default App;
