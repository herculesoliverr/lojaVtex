import React from 'react'
import styles from './StyleCarouselPromo.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Carousel from 'react-bootstrap/Carousel'
// import image1 from '../../../assets/Carousel/1.jpg'
// import image2 from '../../../assets/Carousel/2.jpg'
// import image3 from '../../../assets/Carousel/3.jpg'

function CarouselPromo() {
  return (
    <div>
      <div className={styles.containerCarousel}>
        <div className={styles.containerLeft}>
          <h1>Teste</h1>
        </div>
        <div className={styles.containerRigth}>
          <h1>Teste2</h1>
        </div>
      </div>
    </div>
  )
}


export default CarouselPromo
