import React from 'react'
import './contact.css'
import bfb from "@/public/media/bfb.png"
import bgit from "@/public/media/bgit.png"
import blinkedin from "@/public/media/blinkedin.png"

import Social_link from '../socialMediaLinks/social_link'

const ContactComponent = () => {

  return (
    <div className='contact my-8'>
      <div className='contact_bg'>

        <span className='contact_title'>Contact Us</span>
        <a href='mailto:example@email.com' className='mail'>saloonist@email.com</a>
        <div className='call'>
          <span className='phoneNo'>+233 550-414-170 </span>
          <a href='tel:+233550414170' id='call_btn'>CALL</a>
        </div>

        <div className='con_social'>
          <span>SOCIAL</span>
          <div className='soc_icons'>
            <div className='contact_social_icon'>
              <Social_link 
                socialMedia='Linked in'
                link=''
                image={blinkedin}
              />
            </div>
            <div className='contact_social_icon'>
              <Social_link 
                socialMedia='Facebook'
                link=''
                image={bfb}
              />
            </div>
            <div className='contact_social_icon'>
              <Social_link 
                socialMedia='Github'
                link='https://github.com/ajay-dv8'
                image={bgit}
              />
            </div>

          </div>
        </div>
        
      </div>

    </div>
  )
}

export default ContactComponent