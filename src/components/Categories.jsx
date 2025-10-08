import React from 'react'
import Kota from '../assets/kota_1.jpg'
import Burger from '../assets/burger.jpg'
import Sandwhich from '../assets/sandwich.jpg'
import Special from '../assets/kota_2.jpg'
import Plate from '../assets/plate_1.jpg'
import '../styles.css'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <>
        <div className='categories-section'>
            <div className='h4'>
                <h4>Menu Categories</h4>
                <p>Explore our delicious menu options</p>
                
            </div>
<div className='categories-container'>
    <li className='category-card'>
    <Link to="/" className='btn btn-primary category-btn'>
    <h3 className='category-title'>Today's Special</h3>
    <img src={Special} alt="Category 1" className='category-image'/>
        </Link>  
    </li>
    <li className='category-card'>
    <Link to="/" className='btn btn-primary category-btn'>
        <h3 className='category-title'>Kota</h3>
        <img src={Kota} alt="Category 2" className='category-image'/>
    </Link>
    </li>
    <li className='category-card'>
    <Link to="/" className='btn btn-primary category-btn'>
    <h3 className='category-title'>Burger</h3>
        <img src={Burger} alt="Category 3" className='category-image'/>
        
    </Link>
    </li>
    <li className='category-card'>
    <Link to="/" className='btn btn-primary category-btn'>
    <h3 className='category-title'>Sandwich</h3>
        <img src={Sandwhich} alt="Category 4" className='category-image'/>
        
    </Link>
</li>
    <li className='category-card'>
    <Link to="/" className='btn btn-primary category-btn'>
     <h3 className='category-title'>Plates</h3>
        <img src={Plate} alt="Category 5" className='category-image'/>
       
    </Link>
    </li>
</div>

        </div>
    </>
  )
}

export default Categories