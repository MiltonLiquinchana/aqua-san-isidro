import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/error-page";
import Registrar from "../components/Registro/Registrar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "registrar",
        element: <Registrar />,
      },
      {
        path: "producto",
        element: <></>,
      },
    ],
  },
]);
export default router;
