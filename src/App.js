import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
