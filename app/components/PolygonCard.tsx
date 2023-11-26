import Image from 'next/image';
import React from 'react'

type PolygonCardProps = {
  id: string;
  title: string;
  bgColor: string;
  picture: string;
  progress: number;
  size?: number;
}

const PolygonCard = (props: PolygonCardProps) => {
  return (
    <div className='polygon' >
      <div className='polygon-inner' style={{backgroundColor: props.bgColor}} >
        <Image width={props.size} height={props.size} src={require(`../assets/png/${props.picture}.png`)} alt="pic" />
      </div>
    </div>
  )
}

export default PolygonCard