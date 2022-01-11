import React from 'react'
import styles from './InformationHome.css'
import { FaShippingFast } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { ImCart } from 'react-icons/im';
//import { message } from 'antd';

type PropsInformationHome = {
  message1: string,
  message2: string,
  message3: string
}

function InformationHome( {message1, message2, message3} : PropsInformationHome) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.list}>
          <div className={styles.listLi}>
             <a href="" className={styles.listText}><FaShippingFast size={50} spacing={50}/> <br/>{message1}</a>
             
          </div>
          <div className={styles.listLi} >
            <a href="" className={styles.listText}><FaMapMarkedAlt size={50} className="icons"/> <br/>{message2}</a>
          </div>
          <div className={styles.listLi}>
            <a href="" className={styles.listText}><ImCart size={50} className="icons"/><br/>{message3}</a>
          </div>
        </div>
      </div>
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
