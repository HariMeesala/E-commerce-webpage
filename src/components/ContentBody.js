import React, { useEffect, useState } from 'react'
import card1 from '../assets/image-product-1.jpg'
import card2 from '../assets/image-product-2.jpg'
import card3 from '../assets/image-product-3.jpg'
import card4 from '../assets/image-product-4.jpg'

import CartIcon from '../assets/icon-cart.svg'
import Previous from '../assets/icon-previous.svg'
import Next from '../assets/icon-next.svg'


export default function ContentBody({bg, setBg, isDelete, setIsDelete}) {
    const imageData = [
        {
            id: 1,
            pic: card1
        },
        {
            id: 2,
            pic: card2
        },
        {
            id: 3,
            pic: card3
        },
        {
            id: 4,
            pic: card4
        }
    ]
    
    const [isSelected, setIsSelected] = useState(1)
    const [val, setVal] = useState(1)
    const [imageNo, setImageNo] = useState(0)
    const [mainImage, setMainImage] = useState(imageData[imageNo].pic)

    function handlePrevious() {
        if(imageNo === 0){
            setImageNo(3)
        }
        else{
            setImageNo(imageNo - 1)
        }
    }
    function handleNext() {
        if(imageNo === 3){
            setImageNo(0)
        }
        else{
            setImageNo(imageNo + 1)
        }
    }
    useEffect(() => {
        
        setMainImage(imageData[imageNo].pic)
        setIsSelected(imageNo+1)
        
    }, [imageNo])
    

  return (

        <div className='body-content' >
        
        <div className='cards'>
            <div className='card-1' onClick={() => setBg(false)} style={{backgroundImage: `url(${mainImage})`}} >
                <div className='next-icon pre' onClick={handlePrevious}  ><img src={Previous} alt='' /></div>
                <div className='next-icon next' onClick={handleNext}  ><img src={Next} alt='' /></div>
            </div>
            <div className='card-2'>
                <img onClick={() => {setMainImage(card1); setImageNo(0); setIsSelected(1)}} className={isSelected === 1 && 'activeColor'}  src={card1} alt='' />
                <img onClick={() => {setMainImage(card2); setImageNo(1); setIsSelected(2)}}  src={card2} className={isSelected === 2 && 'activeColor'} alt='' />
                <img onClick={() => {setMainImage(card3); setImageNo(2); setIsSelected(3)}}  src={card3} className={isSelected === 3 && 'activeColor'} alt='' />
                <img onClick={() => {setMainImage(card4); setImageNo(3); setIsSelected(4)}}  src={card4} className={isSelected === 4 && 'activeColor'} alt='' />
            </div>

        </div>
        <div className='card-details'>
            <h5>SNEAKER COMPANY</h5>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='price-details'>
                <div className='price'>
                    <h2>${125.00*val}</h2>
                    <p className='original-price' >${250.00*val}</p>
                </div>
                <div className='offer-percent'>
                    <h3>50%</h3>
                </div>

            </div>
            <div className='btns'>
                <div className='btn-1'>
                    <p onClick={() => {val>1 ? setVal(val-1) : setVal(1)}} className='btn-p' >-</p>
                    <p>{val}</p>
                    <p onClick={() => setVal(val+1)} className='btn-p' >+</p>
                </div>
                <div onClick={() => setIsDelete(false)} className='btn-2'>
                    <img src={CartIcon} alt='' />
                    <p>Add to cart</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}
