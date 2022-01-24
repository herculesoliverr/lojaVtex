import React from 'react'
import kidsFem1 from '../../assets/img/card-itens-home/kidsFem1.jpg'
import kidsFem2 from '../../assets/img/card-itens-home/kidsFem2.jpg'
import kidsMan1 from '../../assets/img/card-itens-home/kidsMan1.jpg'
import kidsMan2 from '../../assets/img/card-itens-home/kidsMan2.jpg'
import { ContainerCardItensHome, ContainerCardOne, ContainerCard, TextCard, TextCardOne } from './StyleCardItensHome'

interface PropsCardItensHome {
  textcardone: string,
  textcardtwo: string,
  textcardthre: string,
  textcardfor: string,
  textcardfive: string
}

function CardItensHome( { textcardone, textcardtwo, textcardthre, textcardfor, textcardfive } : PropsCardItensHome) {
  return (
    <div>
      <ContainerCardItensHome>
        <ContainerCardOne>
          <TextCardOne >{textcardone}</TextCardOne>
        </ContainerCardOne>
        <ContainerCard>
          <a href='/'>
            <img className='ImageContainer' src={kidsFem1}/>
            <div className='CoverImage'></div>
            <TextCard className='TextImageContainer'>{textcardtwo}</TextCard>
          </a> 
        </ContainerCard>
        <ContainerCard >
          <a href='/'>
            <img className='ImageContainer' src={kidsMan1}/>
            <div className='CoverImage'></div>
            <TextCard className='TextImageContainer'>{textcardthre}</TextCard>
          </a> 
        </ContainerCard>
        <ContainerCard>
          <a href='/'>
            <img className='ImageContainer' src={kidsFem2}/>
            <div className='CoverImage'></div>
            <TextCard className='TextImageContainer'>{textcardfor}</TextCard>
          </a> 
        </ContainerCard>
        <ContainerCard>
          <a href='/'>
            <img className='ImageContainer' src={kidsMan2}/>
            <div className='CoverImage'></div>
            <TextCard className='TextImageContainer'>{textcardfive}</TextCard>
          </a> 
        </ContainerCard>
      </ContainerCardItensHome>
    </div>
  )
}


CardItensHome.schema = {
  title: "Container Card Itens Home",
  description: "Descrição",
  type: "object",
  properties:{
    textcardone: {
      title: "Primeiro texto",
      description: "Descrição da Informação",
      type: "string",
      default: "O melhor para o seu filho!",
    },
    textcardtwo: {
      title: "Segundo texto",
      description: "Descrição da Informação",
      type: "string",
      default: "Coleção feminina de inverno",
    },
    textcardthre: {
      title: "Terceiro texto",
      description: "Descrição da Informação",
      type: "string",
      default: "Coleção de rua"
    },
    textcardfor: {
      title: "Quarto texto",
      description: "Descrição da Informação",
      type: "string",
      default: "Coleção de outono"
    },
    textcardfive: {
      title: "Quinto texto",
      description: "Descrição da Informação",
      type: "string",
      default: "Coleção de verão"
    }    
  }
}

export default CardItensHome
