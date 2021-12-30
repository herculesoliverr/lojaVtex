import React from 'react';
//import {useCssHandles} from 'vtex.css-handles'

// const CSS_HANDLES = [
//   'container',
//   'shelfTitle'
// ]

const ShelfItem = ({linkURL, imageURL, name, price, sellingPrice}: shelfType) => {
  //const handles = useCssHandles(CSS_HANDLES)
  return(
    <>
      <div className='shelfItem'>
        <a href={`${linkURL}`} className='shelfLink'></a>
          <div className='shelfImage'>
            <img src={`${imageURL}`} alt={`${name}`} className='shelfImage_img'/>
          </div>
          <h2 className='shelfProductName'>{`${name}`}</h2>
          <div className='shelfPrice'>
            <p className='shelfSellingPrice'>{`${sellingPrice}`}</p>
            <p className='shelfBestPrice'>{`${price}`}</p>
          </div>
      </div>
    </>
  )
}

export default ShelfItem