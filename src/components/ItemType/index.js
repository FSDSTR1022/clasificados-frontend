import styles from './module.itemtype.css'

export function ItemType(constructor) {
  return (
    <article className="anuncio">
      <div className='boximage'>
        <img src={constructor.props.image} alt="" className='image'/>
      </div>
      <div className="anuncio-info">
        <p>{constructor.props.name}</p>
      </div>
    </article>
  );
}
