import React from "react";
import imgSobre from '../assets/imgSobre.png'
import iconIntagram from '../assets/icon-instagram.svg'
import iconWhatsapp from '../assets/icon-whatsapp.svg'

function Sobre() {
    return (
        <section className="flex items-center h-screen">
            <div className="flex flex-row max-md:flex-col-reverse items-center justify-center">
                {/* Texto */}
                <div className=" flex flex-col w-[30%] max-md:w-[75vw]  items-center ">
                    <div className="max-lg:text-7xl max-sm:text-5xl text-shadow-sm text-center text-8xl font-banner tracking-widest font-extrabold bg-gradient-to-r from-pink-800 via-pink-400  to-pink-800 bg-clip-text text-transparent">Bem vinda</div>
                    <p className="text-justify text-xl max-sm:text-lg text-shadow-sm  text-gray-700 font-serif">Transforme seu olhar com sobrancelhas perfeitamente desenhadas.  Seja para um design clássico ou moderno, nosso objetivo é proporcionar um resultado que harmonize com seu estilo e rosto. Agende sua sessão e sinta-se confiante com um visual renovado!</p>
                    <div className="flex items-center mt-8  justify-between">
                        <span className="flex flex-row gap-2 border-gray-300 border-r mr-7 pr-7 ">
                            <a href="https://www.instagram.com/beatrizalvsbeauty/"><img src={iconIntagram} alt="link do instagram" /></a>
                            <a href=""><img src={iconWhatsapp} alt="Link do whatsapp" /></a>
                        </span>
                        <button
                            className=" bg-pink-500 hover:border-white hover:bg-pink-600 duration-400 rounded-full px-5 text-xs text-white font-bold"
                            type="button"
                        > Saiba Mais </button>
                    </div>
                </div>
                {/* Foto */}
                <div className="flex items-center justify-center">
                    <img
                        src={imgSobre}
                        alt="Bia designs"
                        className="w-[32rem] max-md:w-1/2"
                    />
                </div>
            </div>
        </section>
    )
}

export default Sobre