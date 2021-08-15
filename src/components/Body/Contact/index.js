import React from 'react'
import './contact.css'
import Separator from '../../common/separator/index'
import SocialContact from '../../common/social-contact/index'
import { DesktopDownloadIcon } from '@primer/octicons-react'


function Contact() {
  return (
    <div>
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Vamos conversar?</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require('../../../assets/resume.pdf').default}>
            <DesktopDownloadIcon size={24} />
            Download meu curriculo
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
