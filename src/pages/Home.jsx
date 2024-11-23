import React from "react";
import imgBia from '../assets/beatriz.png'
import imgservico1 from '../assets/esfoliacao.jpeg'
import CardHome from '../components/cardHome'
import Carrocel from '../components/Carrocel'

function Home(){
    return(
        <section>
            <Carrocel/>
            <CardHome 
                srcImagem={imgBia}
                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur iusto molestias quibusdam similique nulla obcaecati sit nesciunt! Nulla, tenetur. Dolore placeat accusantium maxime repudiandae deleniti ex modi, doloribus optio."}
            />
            <CardHome 
                ordem={"order-1"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, a non? Sed explicabo ipsum facere. Corrupti incidunt, sit, blanditiis dolores ab maiores, nulla asperiores illo architecto cum fuga in numquam."}
                srcImagem={imgservico1}
            />

            <div className="flex flex-col items-center text-center w-full bg-pink-300 text-black my-32 px-10 py-20 gap-3">
                <h1 className="font-banner text-white text-6xl   ">Realce sua beleza natural e sinta-se confiante todos os dias! Suas sobrancelhas merecem cuidado especial</h1>
                <h3 className="font-serif">Agende agora seu horario!</h3>
                <button 
                    className="font-semibold font-serif leading-none flex  text-pink-600 bg-gray-500 bg-opacity-25 border border-white hover:bg-pink-600 hover:text-white hover:border-white transition duration-150 ease-in-out mt-5"
                    type="button"
                >
                    AGENDAR
                </button>
            </div>
        </section>
    )
}

export default Home;