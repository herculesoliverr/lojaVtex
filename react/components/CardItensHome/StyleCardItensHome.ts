import styled, { keyframes } from 'styled-components'

export const ContainerCardItensHome = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  max-width: 1280px;
  margin: 50px auto;

  .ImageContainer{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const ContainerCardOne = styled.div`
  background: #000;
  color: white;
  max-width: 20%;
  height: 250px;
  position: relative;
  justify-content: center;  
  flex-direction: column;
  width: 20%;
`
export const ContainerCard = styled.div`
  max-width: 20%;
  height: 250px;
  position: relative;
  width: 20%;

  .CoverImage{
    width: 100%;
    height: 100%;
    background-color: rgba(0 ,0 ,0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }
`

const Underline = keyframes`
  from{
    width: 0%;
  } to {
    width: 100%;
  }
`

export const TextCardOne = styled.h2`
  display: flex;
  position: relative;
  height: auto;
  top: 50%;
  transform: translateY(-50%);
  margin: auto auto 31px;
  font-size: 32px;
  line-height: 40px;
  color: #fff;
  font-weight: 600;
  
  &:hover::before {
    content: "";
    position: absolute;
    height: 2px;
    background-color: #6186ec;
    bottom: -10px;
    eft: 0;
    animation: ${Underline} 0.5s ease forwards;
  }
`

export const TextCard = styled.h2`
  color: #dbdbdb;
  text-decoration: none;
  position: absolute;
  top: 60%;
  left: 6px;
  text-align: left;
  z-index: 5;

  &:hover{
    color: white;
  }
`


