import React from "react";
import imgBia from '../assets/beatriz.png'
import imgservico1 from '../assets/esfoliacao.jpeg'
import CardHome from '../components/CardHome'
import Carrocel from '../components/Carrocel'

function Home(){
    return(
        <section className="flex flex-col justify-center gap-40 ">
            <Carrocel/>
            <CardHome 
                titulo="Design Personalizado"
                srcImagem={imgBia}
                desc="Click em saiba mais e veja tudo sobre nosso serviço."
                />
            <CardHome
                titulo="Hidrogloss" 
                ordem={"order-1"}
                srcImagem={imgservico1}
                desc="Click em saiba mais e veja tudo sobre nosso serviço."
            />

            <div className="flex flex-col items-center text-center w-full bg-pink-300 text-black my-32 px-10 py-20 gap-3">
                <h1 className="font-banner text-white text-6xl   ">Realce sua beleza natural e sinta-se confiante todos os dias! Suas sobrancelhas merecem cuidado especial</h1>
                <h3 className="font-serif text-lg text">Agende agora seu horario!</h3>
                <button 
                    className="font-semibold font-serif leading-none flex  text-pink-600 bg-gray-500 bg-opacity-25 border border-white hover:bg-pink-600 hover:text-white hover:border-white transition duration-150 ease-in-out mt-5"
                    type="button"
                    onClick={() => window.location.href=("https://w.app/biadesigns")}
                >
                    AGENDAR
                </button>
            </div>
        </section>
    )
}

export default Home;