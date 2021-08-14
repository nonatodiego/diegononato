import React from 'react'
import './mobile.css'
import {XCircleIcon,RocketIcon,FlameIcon,BriefcaseIcon,CommentDiscussionIcon} from '@primer/octicons-react'


function Mobile({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <XCircleIcon size='medium' />
      </div>
      <div className="mobile-options">
      <div className="mobile">
      <div className="mobile-option">
        <a href="#project">
        <span className="option-icon" > <RocketIcon size='small' /> </span> Projects
        </a>
      </div>
      <div className="mobile-option">
        <a href="#skills" >
        <span className="option-icon" > <FlameIcon size='small' /> </span> Skills
        </a>
      </div>
      <div className="mobile-option">
      <a href="#work" >
      <span className="option-icon" > <BriefcaseIcon size='small' /> </span> Work
      </a>
      </div>
      <div className="mobile-option">
      <a href="#contact" >
      <span className="option-icon" > <CommentDiscussionIcon size='small' /> </span> Contact
      </a>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Mobile
