import React from 'react'

function CardCatalogo({titulo,tipo, descricao, imagem}) {
  return (
    <div className="w-[80%] min-w-[50rem] max-md:min-w-full shadow-2xl rounded-lg font-card max-md:flex-col  bg-opacity-50 flex flex-row justify-center gap-10 max-md:gap-0 items-center px-24 max-sm:px-5">
            
            <div className={`order-${tipo}  max-lg:order-none   flex justify-center items-center  py-5`}>
                <img className="shadow-xl w-[18rem] min-w-[8rem]  rounded-lg" src={imagem} alt="" />
            </div>
 
            <div className="flex flex-col text-left items-start gap-5 w-1/2 max-md:p-3   max-md:w-full  max-lg:items-center  max-lg:text-justify    ">
                <h3 className="text-shadow-sm text-pink-800 text-3xl  font-bold max-md:text-center">{titulo}</h3>
                <p className=" text-gray-600 text-lg text-shadow-md max-sm:text-base">{descricao}</p>

                <button 
                    className="shadow-lg font-semibold leading-none flex  text-gray-600 bg-transparent border border-pink-600 hover:bg-pink-600 hover:text-white hover:border-white transition duration-150 ease-in-out"
                    type="button"
                >
                    AGENDAR
                </button>
            </div>
        </div>
  )
}

export default CardCatalogo
