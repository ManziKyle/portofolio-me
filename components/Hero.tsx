import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackGroundCircles from './BackGroundCircles';
type Props = {}

export default function hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi My Name is Manishimwe',
            'Guy-who-love-coffee.tsx',
            '<ButLovesToCodeMore/>',
        ],
        loop: true,
        delaySpeed:2000,
    });
  return (
    <div className='relative flex flex-col h-screen space-y-8 items-center justify-center text-center overflow-hidden'>
        
        <img className='absolute rounded-full h-32 w-32 mx-auto object-cover mt-46 items-center justify-center' 
            src="https://scontent.fkgl4-1.fna.fbcdn.net/v/t1.18169-9/18301869_1862986170637635_6844088571012741463_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHHLEIyUrg3ZI621DRZx2ZCCMDualJOWi0IwO5qUk5aLU2EAciubjatDZtd17IX-iTAI3qjeL16LX3nNfzEXd5J&_nc_ohc=kX_o1Q1gF4AAX8o8Xsh&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfBa_ZYA-NuPWvsN1s0dvxDy8GMW8jrjF8k-r4UADQR3WA&oe=6396C5AD" alt='my profile pic'/>
        <BackGroundCircles/>
        <div className='z-20 mt-'>
            <h2 className='text-sm uppercase text-gray-500 pb-4 tracking-[10px] mt-12' >Software Engneer</h2>
            <h1>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#prjects">
                <button className='heroButton'>Projects</button>
                </Link>
               
            </div>
        </div>
    </div>
  )
}