import { useState } from 'react'
import Menu from './menu.jsx'
import './index.css'

function Header() {
  return (
    <nav className='header'>
        <img src="https://cdn.getcrowder.com/images/1664925447950-null-ticketmaster-logo-azurewithoutr.png?w=300" alt="" />
        
        <Menu />
    </nav>
  )


}

export default Header
