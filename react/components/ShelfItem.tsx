import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { formatPrice } from '../helpers/Helper'

const CSS_HANDLES = [
  'shelfItem',
  'shelfLink',
  'shelfImage',
  'shelfImage__img',
  'shelfProductName',
  'shelfPrice',
  'shelfSellingPrice',
  'shelfBestPrice',
  'shelfButtonAddToCart',
]

const ShelfItem = ({
  id,
  linkURL,
  imageURL,
  name,
  price,
  sellingPrice,
}: shelfType) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <>
      <div key={id} className={`${handles.shelfItem}`}>
        <a href={`${linkURL}`} className={`${handles.shelfLink}`}></a>
        <div className={`${handles.shelfLink}`}>
          <img
            src={`${imageURL}`}
            alt={`${name}`}
            className={`${handles.shelfImage__img}`}
          />
        </div>
        <h2 className={`${handles.shelfProductName}`}>{`${name}`}</h2>
        <div className={`${handles.shelfPrice}`}>
          <p className={`${handles.shelfSellingPrice}`}>
            {formatPrice(sellingPrice)}
          </p>
          <p className={`${handles.shelfBestPrice}`}>{formatPrice(price)}</p>
        </div>
      </div>
    </>
  )
}

export default ShelfItem
