import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";


function App() {

    return (
      <Router>
        <div className="App">
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  
}

export default App;
