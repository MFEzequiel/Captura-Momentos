
export function Card ({ image, name, text }) {
  return (
    <div className='card'>
      <img src={image} alt='' className='card-image' />
      <article className='card-content'>
        <p className='title'>{name}</p>
        <p className='paragraph'>{text}</p>
      </article>
    </div>
  )
}
