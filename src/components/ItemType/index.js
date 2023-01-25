import styles from './module.itemtype.css'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'

export function ItemType(constructor) {
  return (
    <section className="content1">
      <aside id='aside'>
        <div className='boximage'>
          <img src={constructor.props.image} alt="" className='image' />
        </div>
        <div className="anuncio-info">
          <a id='link'>{constructor.props.name}</a>
        </div>
      </aside>

      

			
		


    </section>


  );
}
