import React from "react";
import telefone from '../assets/telefone.svg'
import {SendHorizontal} from 'lucide-react'

function Footer() {
    return(
        <div className="flex flex-col bottom-0 w-full ">
            <div className="max-sm:flex-col max-sm:gap-3 bg-pink-600 flex justify-around py-10 px-7 font-mono ">                                        {/* Div principal */}
                
                <div className="flex flex-col max-sm:items-center text-white text-wrap">
                    <h3 className="text-xl">INSTITUCIONAL</h3>
                    <a className="text-white hover:underline hover:text-white cursor-pointer">Quem somos</a>
                    <a className="text-white hover:underline hover:text-white cursor-pointer">Contato</a>
                    <a className="text-white hover:underline hover:text-white cursor-pointer">Localizaçõa</a>
                </div>
                <div className="flex flex-col max-sm:items-center text-white text-wrap">
                    <h3 className="text-xl">ATENDIMENTO</h3>
                    <div className="border-b border-b-gray-300 ">
                        <span className="flex"><img src={telefone} alt="" />Telefone</span>
                        <span className="flex"><img src={telefone} alt="" />Telefone</span>
                        <span className="flex"><img src={telefone} alt="" />Telefone</span>
                    </div>
                    <p>Atendimento de Ter a Sab <br/> 08h as 21h</p>
                    <a className="text-white hover:underline hover:text-white cursor-pointer">Agendar</a>
                </div>
               
                <div className="flex flex-col max-sm:items-center text-white text-wrap">
                    <h3 className="text-xl">REDES SOCIAIS</h3>
                    <div>
                        <span className="flex"><img src={telefone} alt="" />Telefone</span>
                        <span className="flex"><img src={telefone} alt="" />Telefone</span>
                    </div>
                </div>
                <div className="flex flex-col max-sm:items-center text-white text-wrap">
                    <h3 className="text-xl">NOVIDADES</h3>
                    <p className="text-">Digite seu email para <br/> enviarmos novidades e promoções <br/>  de nosso salão...</p>
                    <form className="mt-2" action="">
                            <div className="flex justify-between bg-gray-700 bg-opacity-90 border rounded-lg border-gray-500 w-full p-1">
                                <input className="bg-transparent outline-none focus:placeholder-transparent w-full" type="email" placeholder="email" />
                                <button className="bg-none bg-transparent focus:outline-none outline-yellow-400 border-none p-0 "><SendHorizontal size={18}/></button>
                            </div>
                    </form>
                </div>
    
            </div>
            <div className="bg-gray-300 text-gray-600 flex justify-center text-center"> &copy; Desenvolvimento Maxwel Alves | contato.dev.maxwel@gmail.com</div> {/* Div copyright */}
        </div>
    )
}

export default Footer