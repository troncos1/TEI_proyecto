import Link from "next/link";

const ProfesorMenu: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6">Panel de Clases para Profesores</h1>
        <div className="flex flex-col space-y-4">
          <Link href="/profesor/crearClase">
            <p className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-400 hover:text-white">
              Crear Clase
            </p>
          </Link>
          <Link href="/profesor/verClases">
            <p className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-400 hover:text-white">
              Ver Clases
            </p>
          </Link>
          <Link href="/profesor/editarPerfil">
            <p className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-400 hover:text-white">
              Editar Perfil
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfesorMenu;