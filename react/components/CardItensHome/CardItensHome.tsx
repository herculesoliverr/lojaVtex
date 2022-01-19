import React from 'react'
import styles from './CardItensHome.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Carousel from 'react-bootstrap/Carousel'
import kidsFem1 from '../../assets/img/card-itens-home/kidsFem1.jpg'
// import kidsFem2 from '../../assets/img/card-itens-home/kidsFem2.jpg'
// import kidsMan1 from '../../assets/img/card-itens-home/kidsMan1.jpg'
import kidsMan2 from '../../assets/img/card-itens-home/kidsMan2.jpg'
import { ContainerCardItensHome } from './StyleCardItensHome'


function CardItensHome() {
  return (
    <div>
      <ContainerCardItensHome>
        <div className={styles.containerCardOne}>
          <h2 className={styles.textCardOne}>O melhor para o seu filho!</h2>
        </div>
        <div className={styles.containerCardTwo}>
          <a href='/'>
            <img src={kidsFem1}/>
            <h2>Description 2</h2>
          </a> 
        </div>
        <div className={styles.containerCardThree}>
          <a href='/'>
          <img src={kidsMan2}/>
            <h2>Description 3</h2>
          </a> 
        </div>
        <div className={styles.containerCardFour}>
          <a href='/'>
            <img src={kidsMan2}/>
            <h2>Description 4</h2>
          </a> 
        </div>
        <div className={styles.containerCardFive}>
          <a href='/'>
            <img src={kidsMan2}/>
            <h2>Description 5</h2>
          </a> 
        </div>
      </ContainerCardItensHome>
    </div>
  )
}


export default CardItensHome
