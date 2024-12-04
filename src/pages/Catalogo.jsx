import React from 'react'
import CardCatalogo from '../components/CardCatalogo'
import imgservico1 from '../assets/esfoliacao.jpeg'
import designSobraselha from '../assets/designSobranselha.jpeg'
function Catalogo() {
    
  return (
    <div className='flex flex-col items-center bg-pink-50 max-sm:p-10 p-20'>
      <CardCatalogo
        imagem={designSobraselha}
        titulo={"Design Personalizado"}
        descricao={"Design Personalizado harmoniza as sobrancelhas de acordo com o que o seu rosto se adequar o Design de sobrancelhas é único e Personalizado de acordo com cada cliente"}
      />
      <CardCatalogo 
        imagem={imgservico1}
        titulo={"Hidragloss"} 
        tipo={"1"} 
        descricao={"Hidragloss é hidratação dos lábios através de ativos a base de ácido hialurônico ideal para lábios ressecados"}
      />
      <CardCatalogo
        imagem={designSobraselha}
        titulo={"Design Personalizado"}
        descricao={"Design Personalizado harmoniza as sobrancelhas de acordo com o que o seu rosto se adequar o Design de sobrancelhas é único e Personalizado de acordo com cada cliente"}
      />
      <CardCatalogo 
        imagem={imgservico1}
        titulo={"Hidragloss"} 
        tipo={"1"} 
        descricao={"Hidragloss é hidratação dos lábios através de ativos a base de ácido hialurônico ideal para lábios ressecados"}
      />
      <CardCatalogo
        imagem={designSobraselha}
        titulo={"Design Personalizado"}
        descricao={"Design Personalizado harmoniza as sobrancelhas de acordo com o que o seu rosto se adequar o Design de sobrancelhas é único e Personalizado de acordo com cada cliente"}
      />
      <CardCatalogo 
        imagem={imgservico1}
        titulo={"Hidragloss"} 
        tipo={"1"} 
        descricao={"Hidragloss é hidratação dos lábios através de ativos a base de ácido hialurônico ideal para lábios ressecados"}
      />
      
      
    </div>
  )
}

export default Catalogo
