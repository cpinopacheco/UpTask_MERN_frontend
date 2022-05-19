import { Outlet, Navigate } from "react-router-dom"; //Outlet es el contenido de cada uno de los componentes
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) {
    return "Cargando";
  }

  return (
    <>
      {auth._id ? (
        <div className="bg-gray-200">
          <Header />

          <div className="md:flex md:min-h-screen">
            <Sidebar />

            {/* flex-1 toma todo el resto del contenido */}
            <main className="flex-1 p-10">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RutaProtegida;
