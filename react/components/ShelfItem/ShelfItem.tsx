import React from 'react'
import { formatPrice } from '../../helpers/Helper'
import styles from './ShelfItem.css'

const ShelfItem = ({
  id,
  linkURL,
  imageURL,
  name,
  price,
  sellingPrice,
}: shelfType) => {
  return (
    <div>
      <div key={id} className={styles.shelfItem}>
        <a href={`${linkURL}`} className={styles.shelfLink}></a>
        <div className={styles.shelfLink}>
          <img
            src={`${imageURL}`}
            alt={`${name}`}
            className={styles.shelfImage__img}
          />
        </div>
        <h2 className={styles.shelfProductName}>{`${name}`}</h2>
        <div className={styles.shelfPrice}>
          <p className={styles.shelfSellingPrice}>
            {formatPrice(sellingPrice)}
          </p>
          <p className={styles.shelfBestPrice}>{formatPrice(price)}</p>
        </div>
        <div className={styles.shelfButtonAddToCart}>ADICIONAR AO CARRINHO</div>
      </div>
    </div>
  )
}

export default ShelfItem
