import React from "react";
import { Link } from "react-router-dom";


function CardHome({titulo,srcImagem, ordem, desc}){
    return(
        <div className="font-card max-lg:flex-col  bg-opacity-50 flex flex-row justify-center items-center px-36 max-sm:px-0 my-3">
            
            <div className={`${ordem} max-lg:order-none  max-md:w-[80%] flex justify-center items-center col-span-3`}>
                <img className="w-[25rem] object-contain  rounded-lg" src={srcImagem} alt="" />
            </div>

            <div className="flex flex-col items-start gap-3  max-lg:w-full max-lg:items-center  max-lg:text-justify text-left  col-span-2 p-10  rounded-lg ">
                <h3 className="uppercase text-shadow-md max-md:text-center text-pink-800 text-3xl  font-bold">{titulo}</h3>
                <p className=" text-wrap text-shadow-md text-gray-600 text-lg">{desc}</p>
                <Link to="/catalogo">
                    <button  
                        className="font-semibold shadow-lg leading-none flex  text-gray-600 bg-transparent border border-pink-600 hover:bg-pink-600 hover:text-white hover:border-white transition duration-150 ease-in-out focus:outline-none"
                        type="button"
                        >
                        Saiba Mais
                    </button>
                </Link>
            </div>
        </div>

        
    )
}

export default CardHome;