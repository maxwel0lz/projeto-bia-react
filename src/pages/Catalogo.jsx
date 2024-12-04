import React from 'react'
import CardCatalogo from '../components/CardCatalogo'
import imgservico1 from '../assets/esfoliacao.jpeg'
import designSobraselha from '../assets/designSobranselha.jpeg'
function Catalogo() {
    
  return (
    <div className='flex flex-col items-center bg-gray-300 max-sm:p-10 p-20'>
      <CardCatalogo
        imagem={designSobraselha}
        titulo={"Design Personalizado"}
        descricao={"Design Personalizado harmoniza as sobrancelhas de acordo com o que o seu rosto se adequar o Design de sobrancelhas é único e Personalizado de acordo com cada cliente"}
      />
      <CardCatalogo 
        imagem={imgservico1}
        titulo={"Hidragloss"} 
        tipo={"1"} descricao={"Hidragloss é hidratação dos lábios através de ativos a base de ácido hialurônico ideal para lábios ressecados"}
      />
      <CardCatalogo imagem={imgservico1}titulo={"Design de sobrancelha"} descricao={"text-left"} />
      <CardCatalogo imagem={imgservico1}titulo={"Design de sobrancelha"} tipo={"1"} descricao={"text-center"} />
      <CardCatalogo imagem={imgservico1}titulo={"Design de sobrancelha"} descricao={"text-left"} />
      <CardCatalogo imagem={imgservico1}titulo={"Design de sobrancelha"} tipo={"1"} descricao={"text-center"} />
      <CardCatalogo imagem={imgservico1}titulo={"Design de sobrancelha"} descricao={"text-left"} />
      <CardCatalogo imagem={imgservico1}titulo={"Design de sobrancelha"} tipo={"1"} descricao={"text-center"} />
      
    </div>
  )
}

export default Catalogo
