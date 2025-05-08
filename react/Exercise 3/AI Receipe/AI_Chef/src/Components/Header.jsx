import React from 'react'
import chefLogo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="header">    
            <img src={chefLogo} alt="Chef" className="header--logo" width='100px'/>
            
            <h1 className="header--title">AI chef</h1>
    </header>
  )
}

export default Header
