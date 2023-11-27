'use client'
import Image from 'next/image';
import React from 'react'
import Polygon from "../assets/svg/BigPolygon.svg";
import Tab from './Tab';
import experiencesData from "../../data/experience.data.json";
import cardData from "../../data/card.data.json";
import PolygonCard from './PolygonCard';

const Experience = () => {
  const [activeKey, setActiveKey] = React.useState<keyof typeof experiencesData>("Paramtech")
  const [coinflip, setCoinflip] = React.useState<boolean>(false);

  const handleTabChange = (value: keyof typeof experiencesData) => {
    setCoinflip(true);
    setTimeout(() => {
      setActiveKey(value);
    }, 100)
    setTimeout(() => {
      setCoinflip(false);
    }, 500)
  }


  return (
    <div className='experience' >
      <div className='header' >
        <div className='divider'></div>
        <Image src={Polygon} alt="Polygon" />
        <span className='title' >Experience</span>
      </div>
      <div className='body' >
        <div className={`experience-icon ${coinflip ? "coinflip" : ""} `} >
          <PolygonCard {...cardData[activeKey]} />
        </div>
        <div className='experience-tab' >
          <Tab data={experiencesData} activeKey={activeKey} setActiveKey={handleTabChange} />
        </div>
      </div>
    </div>
  )
}

export default Experience