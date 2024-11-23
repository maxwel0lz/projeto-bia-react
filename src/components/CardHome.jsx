import React from "react";


function CardHome({srcImagem, ordem, desc}){
    return(
        <div className="font-card max-lg:flex-col  bg-opacity-50 flex flex-row justify-around items-center px-36 max-sm:px-0 my-3">
            
            <div className={`${ordem} max-lg:order-none w-[60%] max-md:w-[80%] flex justify-center items-center col-span-3`}>
                <img className="w-[500px] object-contain  rounded-lg" src={srcImagem} alt="" />
            </div>

            <div className="flex flex-col items-start gap-3 w-[40%] max-lg:w-full max-lg:items-center  max-lg:text-justify text-left  col-span-2 p-10">
                <h3 className="text-pink-800 text-3xl  font-bold">Design fio a fio</h3>
                <p className="text-wrap text-gray-600 text-lg">{desc}</p>

                <button 
                    className="font-semibold leading-none flex  text-gray-600 bg-transparent border border-pink-600 hover:bg-pink-600 hover:text-white hover:border-white transition duration-150 ease-in-out"
                    type="button"
                >
                    Saiba Mais
                </button>
            </div>
        </div>

        
    )
}

export default CardHome;