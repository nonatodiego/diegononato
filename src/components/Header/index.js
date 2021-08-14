import React, {useState} from 'react'
import './header.css'
import {ThreeBarsIcon} from '@primer/octicons-react'
import Mobile from './Mobile'
import Web from './Web'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Diego Nonato</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <ThreeBarsIcon size='medium' />
          </div>
          {isOpen&&<Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  )
}

export default Header
