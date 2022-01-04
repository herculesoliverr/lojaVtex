import React, { useState, useEffect } from 'react'
import ShelfItem from './components/ShelfItem'
import { SliderLayout } from 'vtex.slider-layout'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['containerShelf']

const Shelf = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const [arrayProducts, setArrayProducts] = useState([]) as any

  useEffect(() => {
    getCategoryItems()
  }, [])

  const getCategoryItems = () => {
    fetch('/api/catalog_system/pub/products/search')
      .then(response => response.json())
      .then(data => {
        setArrayProducts(data)
      })
  }

  console.log(arrayProducts)

  return (
    <div className={`${handles.containerShelf}`}>
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
