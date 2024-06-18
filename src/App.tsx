import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="menu menu-small">
        <Menu />
      </div>
      <div className="contenido">{<Outlet />}</div>
    </>
  );
}

export default App;
