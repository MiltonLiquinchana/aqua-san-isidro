import { useRef } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
export default function Menu() {
  const subMenu = useRef<HTMLDivElement>(null);

  const expandiropciones = () => {
    if (!subMenu.current) {
      return;
    }
    subMenu.current.classList.toggle("expanded");
  };

  const expandmenu = () => {
    console.log("hola perro");
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <div className="navbar-brand">
          <ReactSVG className="header-menu-logo" src="src/assets/miLogo.svg" />
          <span className="header-menu-text">San Isidro Aqua</span>
          <ReactSVG
            className="header-menu-expand"
            src="src/assets/menu/short.svg"
            onClick={expandmenu}
          />
        </div>
        <div className="divider"></div>
        <nav className="options-menu-list">
          <div className="option">
            <Link className="expanded-link">
              <ReactSVG
                className="expanded-link-icon"
                src="src/assets/menu/home.svg"
              />
              <span className="expanded-link-text">Home</span>
            </Link>
          </div>
          <div className="option" ref={subMenu}>
            <Link className="expanded-link" onClick={expandiropciones}>
              <ReactSVG
                className="expanded-link-icon"
                src="src/assets/menu/registro.svg"
              />
              <span className="expanded-link-text">Lecturas</span>
              <ReactSVG
                className="expansion-icon"
                src="src/assets/menu/expand.svg"
              />
            </Link>
            <div className="expanded-list">
              <Link>Todas las lecturas</Link>
              <Link>Registrar lectura</Link>
            </div>
          </div>
          <div className="option">
            <Link className="expanded-link">
              <ReactSVG
                className="expanded-link-icon"
                src="src/assets/menu/acercade.svg"
              />
              <span className="expanded-link-text">Producto</span>
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
}
