import './Card.scss';

export default function Card(props) {
    const {imageURL, title, description, link} = props;
    console.log(link);
  return (
    <li className='card'>
        <img src={imageURL} alt={"photo of" + title} />
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{description}</p>
        <button type='button' className='learn-more-button' onClick={() => {
            window.location.href = link;
        }}>
            Learn more
        </button>
    </li>
  )
}
