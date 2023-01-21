export function ItemType(constructor) {
  return (
    <article className="anuncio">
      <div>
        <img src={constructor.props.image} alt="" />
      </div>
      <div className="anuncio-info">
        <p>{constructor.props.name}</p>
      </div>
    </article>
  );
}
