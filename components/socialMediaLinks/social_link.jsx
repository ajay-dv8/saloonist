
import Image from 'next/image'
import './social_link.css'

const Social_link = ({ socialMedia, link, image }) => {
  return (
    <div className='social_icons'>
     <a href={link} target="_blank" rel="noopener noreferrer">
      <Image src={image} alt={`${socialMedia} icon`} />
     </a>
    </div>
  )
}

export default Social_link