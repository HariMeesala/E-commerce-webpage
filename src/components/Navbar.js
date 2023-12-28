import React, { useState } from 'react'
import MenuIcon from '../assets/icon-menu.svg'
import CloseIcon from '../assets/icon-close.svg'
import CartIcon from '../assets/icon-cart.svg'
import Cart from './Cart'


export default function Navbar({isDelete, setIsDelete}) {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [isCartClicked, setIsCartClicked] = useState(false)


  return (
    <div className='nav-bar' >
        <div onClick={() => setSidebarIsOpen(!sidebarIsOpen)} className='menu-icon'>
              <img src={MenuIcon} alt='' />
        </div>
        
        <div className='nav-link logo'>sneakers</div>
        <div className={sidebarIsOpen ? 'sidebar' : 'nav-items'}>
        {
            sidebarIsOpen && <div onClick={() => setSidebarIsOpen(!sidebarIsOpen)} className='closeIcon'>
              <img src={CloseIcon} alt='' />
            </div>
          }
            <div className='nav-link'>Collections</div>
            <div className='nav-link'>Men</div>
            <div className='nav-link'>Women</div>
            <div className='nav-link'>About</div>
            <div className='nav-link'>Contact</div>
        </div>
        
        <div className='cart-profile'>
        
            <div onClick={() => setIsCartClicked(!isCartClicked)} className='cart'>
              <img src={CartIcon} alt='' />
            </div>
            <div className='profile'></div>
            {
          isCartClicked && <Cart isDelete={isDelete} setIsDelete={setIsDelete} />
        }
        </div>
        
    </div>
  )
}
