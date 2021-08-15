import React from 'react'
import './social-contact.css'
import { SocialData } from '../../data/social'
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
    <label>Entre em contato: </label>
    {data.map((item) => {
      return(
        <a href={item.link}>            
          <div className="social-icon-div">
            <img 
              src={item.icon} 
              alt={item.platform} 
              className="social-icon" 
            />
          </div>
        </a>
      )
    })}
    </div>
  )
}

export default SocialContact
