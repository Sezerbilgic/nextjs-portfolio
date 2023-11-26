import { technologiesData } from '@/data/technologies';
import Image from 'next/image';
import React from 'react'
import Polygon from "../assets/svg/BigPolygon.svg";
import PolygonCard from './PolygonCard';

const Technologies = () => {
  return (
    <div className='technologies' >
      <div className='header' >
        <Image src={Polygon} alt="Polygon" />
        <span className='title' >Technologies</span>
        <div className='divider'></div>
      </div>
      <div className='cards'>
        {
          technologiesData.map((data, index) => (
            <PolygonCard key={index} {...data} />
          ))
        }
      </div>
    </div>
  )
}

export default Technologies