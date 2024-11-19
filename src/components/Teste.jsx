import { useState } from "react";

function Teste() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-gray-100 h-screen">
      {/* Cabeçalho */}
      <header className="bg-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Minha Marca</h1>
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col space-y-1"
          >
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </header>

      {/* Menu e Backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>

          {/* Menu */}
          <div className="relative bg-white w-64 h-full shadow-lg p-4">
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-800 hover:text-gray-500">
                Home
              </a>
              <a href="#" className="block text-gray-800 hover:text-gray-500">
                Sobre
              </a>
              <a href="#" className="block text-gray-800 hover:text-gray-500">
                Serviços
              </a>
              <a href="#" className="block text-gray-800 hover:text-gray-500">
                Contato
              </a>
            </nav>
            <button
              onClick={toggleMenu}
              className="mt-6 block bg-red-500 text-white py-2 px-4 rounded-lg"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Conteúdo Principal */}
      <main className="container mx-auto p-4">
        <p className="text-gray-700">Este é o conteúdo principal do site.</p>
      </main>
    </div>
  );
}

export default Teste;
