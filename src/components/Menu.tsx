// import { useRef } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
export default function Menu() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <div className="navbar-brand">
          <ReactSVG className="header-menu-logo" src="src/assets/miLogo.svg" />
          <span className="header-menu-text">San Isidro Aqua</span>
          <ReactSVG
            className="header-menu-expand"
            src="src/assets/menu/short.svg"
          />
        </div>
        <div className="divider"></div>
        <nav className="options-menu-list">
          <div className="expanded">
            <Link className="expanded-link">
              <ReactSVG className="expanded-link-icon" src="src/assets/menu/registro.svg" />
              <span className="expanded-link-text">Lecturas</span>
              <ReactSVG className="expansion-icon" src="src/assets/menu/expand.svg" />
            </Link>
            <nav className="expanded-list">
              <Link>Todas las lecturasffffe</Link>
              <Link>Registrar lectura</Link>
            </nav>
          </div>
          <div >
            <Link className="expanded-link">
              <ReactSVG className="expanded-link-icon" src="src/assets/menu/home.svg" />
              <span className="expanded-link-text">Producto</span>
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
}
