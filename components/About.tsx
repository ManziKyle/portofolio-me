import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function About({}: Props) {
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
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
        <motion.img
            initial={{
                x:-200,
                opacity:0
            }}
            whileInView = {{
                x:0,
                opacity:1
            }}
            transition = {{
                duration:1.2
            }}
            viewport={{once:true}}
            src="https://scontent.fkgl4-1.fna.fbcdn.net/v/t1.18169-9/18301869_1862986170637635_6844088571012741463_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHHLEIyUrg3ZI621DRZx2ZCCMDualJOWi0IwO5qUk5aLU2EAciubjatDZtd17IX-iTAI3qjeL16LX3nNfzEXd5J&_nc_ohc=kX_o1Q1gF4AAX8o8Xsh&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfBa_ZYA-NuPWvsN1s0dvxDy8GMW8jrjF8k-r4UADQR3WA&oe=6396C5AD"
            className='flex justify-center items-center mt-40 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:mt-20 md:w-64 md:h-96 xl:h-[440px]'
            
        />
        <div className='space-y-10 mt-2 px-0 md:p-10'>
            {/* <h4 className='text-4xl  px-6 font-semibold sm:text-sm sm:p-0'>Here is a <span className='underline decoration-[#F7ABBA]/50'>little</span>{" "}background</h4> */}
            <p className='text-base md:px-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
        </div>
    </motion.div>
  )
}