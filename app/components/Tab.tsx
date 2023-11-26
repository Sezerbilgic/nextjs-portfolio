'use client'
import React from 'react'

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
  [key: string]: Array<TabData>
}

type TabProps = {
  data: TabData,
  activeKey?: string
}

const Tab = (props: TabProps) => {
  const experienceKeys = Object.keys(props.data)
  const [activeTab, setActiveTab] = React.useState<string>(props.activeKey || experienceKeys[0])
  const [activeData, setActiveData] = React.useState<Array<TabDataProps>>(props.data[activeTab])
  console.log(activeTab, activeData)
  return (
    <div className='tab' >
      <div className='tab-header' >
        {
          experienceKeys.map((exp, index: number) => (
            <span onClick={() => setActiveTab(exp)} key={index} className={`tab-header-title ${exp === activeTab ? "active" : ""}`} >{exp}</span>
          ))
        }
      </div>
      <div className='tab-body' >
        {
          activeData?.map((data, index) => (
            <div key={index} >
              <span>{data.title}</span>
              <span>{data.date.startDate}</span> - <span>{data.date.endDate}</span>

              {
                data.experiences?.map((exp, index) => (
                  <p key={index} >{exp.description}</p>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Tab