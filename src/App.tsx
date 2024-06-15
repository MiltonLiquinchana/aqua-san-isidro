import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="menu">
        <Menu />
      </div>
      <div className="contenido">{<Outlet />}</div>
    </>
  );
}

export default App;
