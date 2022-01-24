import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 8em;
  background: rgba(0, 0, 0, 0.8);
`

export const List = styled.div`
  list-style-type: none;
  text-transform: uppercase;
  width: 70%;
  font-size: 18px;
  line-height: 14px;
  display: flex;
  padding: 25px;
  margin: auto;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  color: #FFFFFF;
`

const Underline = keyframes`
  from{
    width: 0%;
  } to {
    width: 100%;
  }
`

export const ListList = styled.div`
  position: relative;

  &:hover::before{
    content: "";
    position: absolute;
    height: 2px;
    background-color: #6186ec;
    bottom: -10px;
    left: 0;
    animation: ${Underline} 0.5s ease forwards;
  }
`

export const ListText = styled.a`
  text-decoration: none;
  color: #FFFFFF;
  padding-top: 10px;

  .icons{
    padding-bottom: 10px;
  }
`
