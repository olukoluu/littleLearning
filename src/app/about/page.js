import React from 'react'
import Achievements from './components/Achievements'
import Expertise from './components/Expertise'
import History from './components/History'
import MissionVision from './components/MissionVision'
import Overview from './components/Overview'

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center py-2 md:px-10'>
      <Overview />
      <MissionVision />
      <Achievements />
      <History />
      <Expertise />
    </section>
  )
}

export default About