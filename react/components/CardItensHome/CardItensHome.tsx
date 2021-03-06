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
  description: "Descri????o",
  type: "object",
  properties:{
    textcardone: {
      title: "Primeiro texto",
      description: "Descri????o da Informa????o",
      type: "string",
      default: "O melhor para o seu filho!",
    },
    textcardtwo: {
      title: "Segundo texto",
      description: "Descri????o da Informa????o",
      type: "string",
      default: "Cole????o feminina de inverno",
    },
    textcardthre: {
      title: "Terceiro texto",
      description: "Descri????o da Informa????o",
      type: "string",
      default: "Cole????o de rua"
    },
    textcardfor: {
      title: "Quarto texto",
      description: "Descri????o da Informa????o",
      type: "string",
      default: "Cole????o de outono"
    },
    textcardfive: {
      title: "Quinto texto",
      description: "Descri????o da Informa????o",
      type: "string",
      default: "Cole????o de ver??o"
    }    
  }
}

export default CardItensHome
