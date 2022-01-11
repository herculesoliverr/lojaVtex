import React, { useState, useEffect } from 'react'
import ShelfItem from './components/ShelfItem/ShelfItem'
import { SliderLayout } from 'vtex.slider-layout'
import styles from '../react/components/ShelfItem/ShelfItem.css'
//import {useOrderItems} from 'vtex.order-items/OrderItems'


const Shelf = () => {
 //const {addItem} = useOrderItems
  const [arrayProducts, setArrayProducts] = useState([]) as any

  useEffect(() => {
    getCategoryItems()
  }, [])

  const getCategoryItems = () => {
    fetch('/api/catalog_system/pub/products/search/maio')
      .then(response => response.json())
      .then(data => {
        setArrayProducts(data)
      })
  }

  return (
    <div className={styles.containerShelf}>
      {arrayProducts ? (
        <>
          <SliderLayout
            itemsPerPage={{
              desktop: 4,
              tablet: 3,
              phone: 2,
            }}
            showPaginationDots="never"
          >
            {arrayProducts.map((product: any) => (
              <ShelfItem
                linkURL={product.link}
                id={product.id}
                imageURL={product.items[0].images[0].imageUrl}
                name={product.productName}
                sellingPrice={
                  product.items[0].sellers[0].commertialOffer.ListPrice
                }
                price={product.items[0].sellers[0].commertialOffer.Price}
              />
            ))}
          </SliderLayout>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default Shelf
