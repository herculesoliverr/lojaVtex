import React from 'react'
import { FaShippingFast } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { ImCart } from 'react-icons/im';
import {Container, List, ListList, ListText} from './StyleInformationHome'

interface PropsInformationHome {
  message1: string,
  message2: string,
  message3: string
}

function InformationHome( {message1, message2, message3} : PropsInformationHome) {
  return (
    <div>
      <Container>
        <List>
          <ListList>
             <ListText href="" ><FaShippingFast size={50} className="icons"/> <br/>{message1}</ListText>
          </ListList>
          <ListList>
            <ListText href="" ><FaMapMarkedAlt size={50} className="icons"/> <br/>{message2}</ListText>
          </ListList>
          <ListList>
            <ListText href="" ><ImCart size={50} className="icons"/><br/>{message3}</ListText>
          </ListList>
        </List>
      </Container>
    </div>
  )
}

InformationHome.schema = {
  title: "Informações Home",
  description: "Descrição",
  type: "object",
  properties:{
    message1: {
      title: "Primeira Informação",
      description: "Descrição da Informação",
      type: "string",
      default: "Frete Grátis",
    },
    message2: {
      title: "Segunda Informação",
      description: "Descrição da Informação",
      type: "string",
      default: "Encontre uma loja",
    },
    message3: {
      title: "Terceira Informação",
      description: "Descrição da Informação",
      type: "string",
      default: "Receba promoções exclusivas"
    }
    
  }
}

export default InformationHome
