import React from 'react'
import {RocketIcon,FlameIcon,BriefcaseIcon,CommentDiscussionIcon    } from '@primer/octicons-react'

import './web.css'

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
        <span className="option-icon" > <RocketIcon size='medium' /> </span> Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills" >
        <span className="option-icon" > <FlameIcon size='medium' /> </span> Skills
        </a>
      </div>
      <div className="web-option">
      <a href="#work" >
      <span className="option-icon" > <BriefcaseIcon size='medium' /> </span> Work
      </a>
      </div>
      <div className="web-option">
      <a href="#contact" >
      <span className="option-icon" > <CommentDiscussionIcon size='medium' /> </span> Contact
      </a>
      </div>
    </div>
  )
}

export default Web
