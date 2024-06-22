import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import { useRef } from "react";

function App() {
  const containerMenuRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="menu" ref={containerMenuRef}>
        <Menu containerMenuRef={containerMenuRef} />
      </div>
      <div className="contenido">{<Outlet />}</div>
    </>
  );
}

export default App;
