import { useRef } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
interface props {
  containerMenuRef: React.RefObject<HTMLDivElement>;
}
export default function Menu({ containerMenuRef }: props) {
  const subMenu = useRef<HTMLDivElement>(null);

  const expandOptions = () => {
    if (!subMenu.current) {
      return;
    }
    if (containerMenuRef.current?.classList.contains("menu-small")) {
      return;
    }
    subMenu.current.classList.toggle("expanded");
  };

  const expandMenu = () => {
    if (!containerMenuRef.current) {
      return;
    }
    containerMenuRef.current.classList.toggle("menu-small");
    if (!subMenu.current?.classList.contains("expanded")) {
      return;
    }
    subMenu.current.classList.remove("expanded");
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
            onClick={expandMenu}
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
            <Link className="expanded-link" onClick={expandOptions}>
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
