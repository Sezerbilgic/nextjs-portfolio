import Image from 'next/image'
import React from 'react'
import Logo from '../assets/svg/Logo.svg';
import Polygon from '../assets/svg/Polygon.svg';

const Navbar = () => {
  return (
    <nav className='navbar' > 
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div>
        <ul className='nav-list' >
          <li className='nav-item' ><Image src={Polygon} alt="Polygon" /> About</li>
          <li className='nav-item' ><Image src={Polygon} alt="Polygon" /> Technologies</li>
          <li className='nav-item' ><Image src={Polygon} alt="Polygon" /> Experience</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar