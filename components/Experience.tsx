import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5
        }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='tittle'>Experience</h3>
        <div>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>

        </div>
    </motion.div>
  )
}