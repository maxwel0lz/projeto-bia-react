import React from 'react'
import imgservico1 from '../assets/esfoliacao.jpeg'
function Catalogo() {
    const width = 639
  return (
    <section className='flex flex-col items-center text-black p-10 '>
      <div className='flex flex-row max-sm:flex-col items-center gap-10'>

        <div className="flex font-serif text-xs w-52 max-sm:text-center">
            <h1>Design de sobrancelhas</h1>
        </div>
        

        
        
      {width < 640 ? (
        <div className='flex flex-row gap-10'>
            <div className='w-1/4 max-lg:w-1/2 max-md:w-[100%]  max-sm:w-[75%] max-sm:min-w-64 '>
            <img src={imgservico1} alt="" />
            </div>
            <div className='w-1/4 max-lg:w-1/2 max-md:w-[100%]  max-sm:w-[75%] max-sm:min-w-64 '>
                <img src={imgservico1} alt="" />
            </div>
            <div className='w-1/4 max-lg:w-1/2 max-md:w-[100%]  max-sm:w-[75%] max-sm:min-w-64 '>
                <img src={imgservico1} alt="" />
            </div>
            <div className='w-52 bg-gray-500'>
                
            </div>
        </div>
      ) : (
        <> 
            <div className='w-1/4 max-lg:w-1/2 max-md:w-[100%]  max-sm:w-[75%] max-sm:min-w-64 '>
            <img src={imgservico1} alt="" />
            </div>
            <div className='w-1/4 max-lg:w-1/2 max-md:w-[100%]  max-sm:w-[75%] max-sm:min-w-64 '>
                <img src={imgservico1} alt="" />
            </div>
            <div className='w-1/4 max-lg:w-1/2 max-md:w-[100%]  max-sm:w-[75%] max-sm:min-w-64 '>
                <img src={imgservico1} alt="" />
            </div>
            <div className='w-52 bg-gray-500'>
                
            </div>
        </>
      )}
        
        
        
        
      </div>
      
    </section>
  )
}

export default Catalogo
