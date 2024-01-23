import { NavBar } from "./component";
import "./App.css";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default App;
