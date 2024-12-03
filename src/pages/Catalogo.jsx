import React from 'react'
import CardCatalogo from '../components/CardCatalogo'

function Catalogo() {
    
  return (
    <div className='flex flex-col items-center bg-gray-300'>
      <CardCatalogo titulo={"Design de sobrancelha"} texto={"text-left"} />
      <CardCatalogo titulo={"Design de sobrancelha"} tipo={"flex-row-reverse"} texto={"text-center"} />
      <CardCatalogo titulo={"Design de sobrancelha"} texto={"text-left"} />
      <CardCatalogo titulo={"Design de sobrancelha"} tipo={"flex-row-reverse"} texto={"text-center"} />
      <CardCatalogo titulo={"Design de sobrancelha"} texto={"text-left"} />
      <CardCatalogo titulo={"Design de sobrancelha"} tipo={"flex-row-reverse"} texto={"text-center"} />
      <CardCatalogo titulo={"Design de sobrancelha"} texto={"text-left"} />
      <CardCatalogo titulo={"Design de sobrancelha"} tipo={"flex-row-reverse"} texto={"text-center"} />
      
    </div>
  )
}

export default Catalogo
