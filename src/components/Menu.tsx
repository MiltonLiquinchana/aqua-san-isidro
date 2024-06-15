import { MouseEvent } from "react";
import { ReactSVG } from "react-svg";
export default function Menu() {
  const expandir = (e: MouseEvent<HTMLDivElement>): void => {
    const elemento = e.target as HTMLDivElement;
    /** Seleccionamos todos los li */
    const items = elemento.querySelectorAll("li");
    console.log(items);
  };
  return (
    <nav className="nav flex-column navigation navigation-menu">
      <div className="container">
        <a className="navbar-brand" href="#">
          <ReactSVG src="src/assets/miLogo.svg" />
        </a>
        <div className="menu-header-text">
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
        </div>
        <button type="button">
          <ReactSVG src="src/assets/menu/short.svg" />
        </button>
      </div>
      <div className="divider"></div>
      <a className="nav-link active" aria-current="page" href="#">
        <ReactSVG src="src/assets/menu/home.svg" />
        Active
      </a>
      <div
        className="nav-link expanded"
        tabIndex={0}
        onClick={(e) => {
          expandir(e);
        }}
        role="button"
      >
        <div className="expanded-link">
          <ReactSVG src="src/assets/menu/registro.svg" />
          Link
        </div>

        <ReactSVG className="expanded-icon" src="src/assets/menu/expand.svg" />
      </div>
      <a className="nav-link" href="#">
        Link
      </a>
      <a className="nav-link disabled" aria-disabled="true">
        Disabled
      </a>
    </nav>
  );
}
