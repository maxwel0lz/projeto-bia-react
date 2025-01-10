import React from "react";
import imgBia from '../assets/beatriz.png'
import imgservico1 from '../assets/esfoliacao.jpeg'
import CardHome from '../components/CardHome'
import Carrocel from '../components/Carrocel'
import imgVoceLinda from '../assets/voce-e-linda2.jpg'
import cenario from '../assets/cenario2.png'

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

            <div 
                className="bg-fixed bg-cover bg-center bg-no-repeat  h-[500px] w-full text-black my-32 "
                style={{backgroundImage: `url(${cenario})`}}
            >
                <div className="h-full w-full backdrop-brightness-[.6] flex flex-col items-center text-center justify-center">

                    <h3 className="font-serif text-lg text uppercase text-white">Agende agora seu horario!</h3>
                    <button 
                        className="font-semibold font-serif leading-none flex  text-pink-600 bg-gray-500 bg-opacity-25 border border-white hover:bg-pink-600 hover:text-white hover:border-white transition duration-150 ease-in-out mt-5"
                        type="button"
                        onClick={() => window.location.href=("https://w.app/biadesigns")}
                    >
                        AGENDAR
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home;