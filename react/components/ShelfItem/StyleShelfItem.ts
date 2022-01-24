import styled from 'styled-components'

/////////////////////////////////////
// SHELF RAIZ 
/////////////////////////////////////

export const ContainerShelf = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
export const ContainerShelfTitle = styled.div`
  position: relative;
`
export const TitleShelf = styled.p`
  width: auto;
  margin-bottom: 0;
  padding-top: 32px;
  padding-bottom: 24px;
  text-align: center;
  font-size: 32px;
  color: #000;
  font-weight: 800;
  text-transform: uppercase;
`


/////////////////////////////////////
// SHELF COMPONENT 
////////////////////////////////////

export const ItemShelf = styled.div`
  margin: 0 5px;
`
export const ShelfLink = styled.a`
  text-decoration: inherit;
`
export const ShelfImage__img = styled.img`
  position: relative;
  max-width: 16em;
  max-height: 16em;
`
export const ShelfProductName = styled.h2`
  display: block;
  text-transform: uppercase;
  text-align: center;
  line-height: 16px;
  letter-spacing: 0.35px;
  font-size: 14px;
  font-weight: 300;
  text-shadow: rgba(0,0,0,0.2) 0 0 1px;
  color: #000;
  line-height: inherit;
  margin-right: 10px;
`
export const ShelfPrice = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`
export const ShelfSellingPrice = styled.p`
  margin-top: 0;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  margin-right: 0.5rem;
  text-decoration: line-through;
`
export const ShelfBestPrice = styled.p`
  margin-top: 2px;
  font-weight: 800;
  color: #000;
  font-size: 16px;
  line-height: 18px;
`
export const ShelfButtonAddToCart = styled.div`
  text-align: center;
  background: #000;
  color: #fff;
  border-radius: 5px;
  padding: 10px 0;
  max-width: 50%;
  margin: 0 auto;
  cursor: pointer;
`