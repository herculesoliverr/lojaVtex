import React, {useState, useEffect} from 'react';
import ShelfItem from './components/ShelfItem';

const Shelf = () => {

  const [arrayProducts, setArrayProducts] = useState([]) as any

  useEffect(() => {
    getCategoryItems()
  }, [])

  const getCategoryItems = () =>{
    fetch('/api/catalog_system/pub/products/search/maio')
    .then((response:any) => response.json())
    .then((data:any) => {
      setArrayProducts(data)
    })
  }

  console.log(arrayProducts)

  return(
    
    <>
      {arrayProducts ? 
      <>
        {arrayProducts.map((product: any) =>{
          <ShelfItem linkURL={product.link} imageURL={product.items[0].images[0].imageUrl} name={product.productName} sellingPrice={product.items[0].sellers[0].commertialOffer.listPrice} price={product.items[0].sellers[0].commertialOffer.price} />
        })}
      
      </>
      : ''}
    </>
  )
} 

export default Shelf;