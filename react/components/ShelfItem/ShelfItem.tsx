import React from 'react'
import { formatPrice } from '../../helpers/Helper'
import { ItemShelf, ShelfLink, ShelfImage__img, ShelfProductName, ShelfPrice, ShelfSellingPrice, ShelfBestPrice, ShelfButtonAddToCart } from './StyleShelfItem'

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
      <ItemShelf key={id}>
        <ShelfLink href={`${linkURL}`} >
        <ShelfLink>
          <ShelfImage__img
            src={`${imageURL}`}
            alt={`${name}`}            
          />
        </ShelfLink>
        <ShelfProductName>{`${name}`}</ShelfProductName>
        </ShelfLink>
        <ShelfPrice>
          <ShelfSellingPrice>
            {formatPrice(sellingPrice)}
          </ShelfSellingPrice>
          <ShelfBestPrice>{formatPrice(price)}</ShelfBestPrice>
        </ShelfPrice>
        <ShelfButtonAddToCart>ADICIONAR AO CARRINHO</ShelfButtonAddToCart>
      </ItemShelf>
    </div>
  )
}

export default ShelfItem
