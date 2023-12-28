import React from 'react'

export default function Cart({isDelete, setIsDelete}) {

  return (
    <div className='cart-container'>
        <div className='cart-header'>
            <h3>Cart</h3>
        </div>
        {
            !isDelete ?
            <div className='cart-body'>
                <div className='cart-item-info'>
                    <div className='cart-item-pic'></div>
                        <div className='cart-item-details'>
                        <h4>Fall Limited Edition Sneakers</h4>
                        <h3>$125.00 x 3 <b>$375.00</b></h3>
                    </div>
                    <div onClick={() => setIsDelete(true)} className='cart-item-delete'></div>
                </div>
                <button className='cart-button'>Checkout</button>
            </div> 
            : 
            <div className='cart-body'>
                <h4>Cart is empty</h4>
            </div>

        }
        
    </div>
  )
}
