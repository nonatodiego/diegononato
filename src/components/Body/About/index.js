import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Olá mundo ! 🖐<br/><br/> Eu sou <br/>
          <span className="info-name">Diego Nonato</span><br/>
          Programador Frontend Júnior
        </div>
        <div className="about-photo">
          <img src={require('../../../assets/perfil.png').default} className="picture" alt="" />
        </div>
      </div>
      <SocialContact/>
    </div>
  )
}

export default About
