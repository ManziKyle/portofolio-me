import { motion} from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img
            // inital={{
            //     y:-100
            //     opacity:0
            // }} 
            className='w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center bg-white'
            src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png" alt=""
        />
    </article>
  )
}