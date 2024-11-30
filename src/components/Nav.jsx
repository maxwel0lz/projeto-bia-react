import React, { useState } from "react";

import logo from "../assets/logo-backgroudReduzida.png"

function Nav(){
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {setMenuOpen(!menuOpen)}
    return (
        <nav className=' w-full '>
            <div className='  border w-full flex items-center justify-center columns-xl p-1.5 max-sm:justify-normal' >
                <img className='w-40' src={logo} alt="" />
                <div className='flex flex-row gap-10 absolute right-5 '>                              {/*BOX AVATAR*/}
                    <a className="max-sm:hidden flex flex-col items-center text-gray-700 hover:text-pink-600 text-sm font-mono font-bold" href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>Minha Conta</a>
                    <a className="max-sm:hidden flex flex-col items-center text-gray-700 hover:text-pink-600 text-sm font-mono font-bold" href=""><svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg> Atendimento</a>
                    <button
                    class="sm:hidden flex flex-col space-y-1 bg-pink-600"
                    onClick={toggleMenu}
                    >
                        <span class="block w-6 h-0.5 bg-gray-800"></span>
                        <span class="block w-6 h-0.5 bg-gray-800"></span>
                        <span class="block w-6 h-0.5 bg-gray-800"></span>
                    </button>
                </div> 

            </div>
        {menuOpen && (
            <div className="fixed inset-0 z-40 flex">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={toggleMenu}
            ></div>

            {/* Menu */}
            <div className="relative bg-white w-72 h-full shadow-lg p-4">
                <h2 className="text-lg font-bold mb-4">Menu</h2>
                <div className="flex flex-col gap-5">

                    <span className="flex flex-col gap-5 justify-center border ">
                        <h3 className="text-2xl  font-bold text-gray-800">Usuario</h3>
                        <a className="flex gap-2 ml-3 text-gray-800 hover:text-gray-500" href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>Minha Conta
                        </a>
                        <a className="flex gap-2 ml-3  text-gray-800 hover:text-gray-500" href=""><svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg> Atendimento
                        </a>
                    </span>
                    <span className="flex flex-col gap-5 justify-center border">
                        <h3 className="text-2xl  font-bold text-gray-800">Navegar</h3>
                        <a href="#" className="block ml-3 text-gray-800 hover:text-gray-500">
                            Serviços
                        </a>
                        <a href="#" className="block ml-3 text-gray-800 hover:text-gray-500">
                            Contato
                        </a>
                    </span>
                </div>
                <button
                onClick={toggleMenu}
                className="mt-6 block bg-pink-500 text-white py-2 px-4 rounded-lg"
                >
                Fechar
                </button>
            </div>
            </div>
        )}
        <div className='bg-pink-600 max-sm:hidden'>
            <ul className='bg-pink-500 flex items-center justify-center gap-14 py-2 text-base font-black font-mono text-wrap '>
                <li className="cursor-pointer text-white border-b-2">Home</li>
                <li className="cursor-pointer text-white">Catalogo</li>
                <li className="cursor-pointer text-white">Serviço</li>
                <li className="cursor-pointer text-white">Promoções</li>
                <li className="cursor-pointer text-white">Saiba Mais</li>
            </ul>
        </div>
    </nav>
    )
}



export default Nav