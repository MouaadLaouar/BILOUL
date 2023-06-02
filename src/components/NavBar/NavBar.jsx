import './NavBar.scss'
import logo from "../../assets/logo.png"
import biloul from "../../assets/BILOUL.png"

import menu from '../../assets/icons8-menu.svg';
import close from '../../assets/icons8-close.svg'
import { useState } from 'react';

export default function NavBar() {
  const screenWidth = window.screen.width;
  const isLargerThanMobile = screenWidth > 600;
  const [icon, seticon] = useState(menu)
  const [isactive, setisactive] = useState(null)

  const NavBarMode = () => {
    if (icon === menu) {
      seticon(close)
      setisactive("active")
    } else {
      seticon(menu)
      setisactive(null)
    }
  }

  return (
    <div className='NavBar'>
      <div className='logo'>
        <img className='logoPic' src={ logo } alt="logo" />
        <img className='biloul' src={ biloul } alt="bilou" />
      </div>

      <div className='Menu'>
        {
          isLargerThanMobile ? (
            <ul>
              <li><a href="#Section-Two">Services</a></li>
              <li><a href="#Section-Four">Industries</a></li>
              <li><a href="#Section-Seven">Company</a></li>
              <li><a href="#Footer">Contact</a></li>
            </ul>
          ) : (
            <>
              <img className="Menu_Button" src={ icon } alt='menu' onClick={NavBarMode}/>
              <ul className={`Menu_Mobile ${isactive}`} onClick={NavBarMode}>
                <li><a href="#Section-Two">Services</a></li>
                <li><a href="#Section-Four">Industries</a></li>
                <li><a href="#Section-Seven">Company</a></li>
                <li><a href="#Footer">Contact</a></li>
              </ul>
            </>
          )
        }
      </div>
    </div>
  )
}
