import React from "react";

import logo from "../assets/logo-backgroudNone.png"

function Nav() {
    return (
        <nav className='w-full'>
            <div className='border w-full grid grid-cols-2 items-center justify-items-center columns-xl p-1.5' >
                <img className='w-40' src={logo} alt="" />
                <div className='flex flex-row gap-10 '>                              {/*BOX AVATAR*/}
                    <a className="flex flex-col items-center text-gray-700 hover:text-pink-600 text-sm font-mono font-bold" href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>Minha Conta</a>
                    <a className="flex flex-col items-center text-gray-700 hover:text-pink-600 text-sm font-mono font-bold" href=""><svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg> Atendimento</a>
                </div>
            </div>
            <div className='bg-pink-600'>
                <ul className='bg-pink-500 flex items-center justify-center gap-14 py-2 text-base font-black font-mono '>
                    <li className="text-white border-b-2">Home</li>
                    <li className="text-white">Catalogo</li>
                    <li className="text-white">Serviço</li>
                    <li className="text-white">Promoções</li>
                    <li className="text-white">Saiba Mais</li>
                </ul>
            </div>
        </nav>
    )
}



export default Nav