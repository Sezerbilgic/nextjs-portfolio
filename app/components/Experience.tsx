import Image from 'next/image';
import React from 'react'
import Polygon from "../assets/svg/BigPolygon.svg";
import Tab from './Tab';
import experiencesData from "../../data/experience.data.json";

const Experience = () => {
  return (
    <div className='experience' >
      <div className='header' >
        <div className='divider'></div>
        <Image src={Polygon} alt="Polygon" />
        <span className='title' >Experience</span>
      </div>
      <div className='experience-tab' >
        <Tab data={experiencesData} activeKey="Paramtech" />
      </div>
    </div>
  )
}

export default Experience