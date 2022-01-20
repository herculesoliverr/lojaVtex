import React from 'react'
import kidsFem1 from '../../assets/img/card-itens-home/kidsFem1.jpg'
import kidsFem2 from '../../assets/img/card-itens-home/kidsFem2.jpg'
import kidsMan1 from '../../assets/img/card-itens-home/kidsMan1.jpg'
import kidsMan2 from '../../assets/img/card-itens-home/kidsMan2.jpg'
import { ContainerCardItensHome, ContainerCardOne, ContainerCard, TextCard, TextCardOne } from './StyleCardItensHome'


function CardItensHome() {
  return (
    <div>
      <ContainerCardItensHome>
        <ContainerCardOne>
          <TextCardOne >O melhor para o seu filho!</TextCardOne>
        </ContainerCardOne>
        <ContainerCard>
          <a href='/'>
            <img className='ImageContainer' src={kidsFem1}/>
            <div className='CoverImage'></div>
            <TextCard className='TextImageContainer'>Coleção feminina de inverno</TextCard>
          </a> 
        </ContainerCard>
        <ContainerCard >
          <a href='/'>
            <img className='ImageContainer' src={kidsMan1}/>
            <div className='CoverImage'></div>
            <TextCard className='TextImageContainer'>Coleção de rua</TextCard>
          </a> 
        </ContainerCard>
        <ContainerCard>
          <a href='/'>
            <img className='ImageContainer' src={kidsFem2}/>
            <div className='CoverImage'></div>
            <TextCard className='TextImageContainer'>Coleção de outono</TextCard>
          </a> 
        </ContainerCard>
        <ContainerCard>
          <a href='/'>
            <img className='ImageContainer' src={kidsMan2}/>
            <div className='CoverImage'></div>
            <TextCard className='TextImageContainer'>Coleção de verão</TextCard>
          </a> 
        </ContainerCard>
      </ContainerCardItensHome>
    </div>
  )
}


export default CardItensHome
