import Image from 'next/image';
import React from 'react'
import Polygon from "../assets/svg/Polygon.svg";

type TabDataProps = {
  title: string,
  date: {
    startDate: string,
    endDate: string,
  },
  experiences?: {
    description: string,
  }[]
}

type TabData = {
  [key: string]: Array<TabDataProps>
}

type TabProps = {
  data: TabData,
  activeKey: string
  setActiveKey: (e: any) => void
}

const Tab = (props: TabProps) => {
  const experienceKeys = Object.keys(props.data)

  return (
    <div className='tab' >
      <div className='tab-header' >
        {
          experienceKeys.map((exp, index: number) => (
            <span onClick={() => props.setActiveKey(exp)} key={index} className={`tab-header-title ${exp === props.activeKey ? "active" : ""}`} >{exp}</span>
          ))
        }
      </div>
      {
        Object.entries(props.data).map(([key, activeData], index) => (
          <div key={index} className={`tab-body fadeIn ${key === props.activeKey ? "active" : ""}`} >
            {
              activeData?.map((data, index) => (
                <>
                  <div className='tab-body-list' key={index} >
                    <span className='tab-body-title' >{data.title}</span>
                    <span className='tab-body-date' >{data.date.startDate} - {data.date.endDate}</span>

                    {
                      data.experiences?.map((exp, index) => (
                        <p className='tab-body-description' key={index} ><Image className='icon' src={Polygon} alt="Polygon" />{exp.description}</p>
                      ))
                    }
                  </div>
                  {
                    index !== activeData.length - 1 &&
                    <div className='divider-container' >
                      <div className='divider' ></div>
                      <Image className='icon' src={Polygon} alt="Polygon" />
                      <div className='divider' ></div>
                    </div>
                  }
                </>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default Tab