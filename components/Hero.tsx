/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Aloha dance, The Name's Yousef Abdelkhaleq", "Developer", "Designer", "Creator"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/284033701_10225175548470016_2241811296021889150_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rC7f_X2DAzkAX-RcWGE&_nc_ht=scontent-mia3-2.xx&oh=00_AfDmcNpi-HKXEDd41o9cjzvCiNry4xGUY7TqpltlpOsDSg&oe=63EB9284" 
        alt="Profile Picture"/>
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[15px]'>Software Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#AB0AF7' />
        </h1>
        <div className='pt-5'>
        <Link href="#about">
        <button className='heroButton'>About</button>
        </Link>
        <Link href="#experience">
        <button className='heroButton'>Experience</button>
        </Link>
        <Link href="#skills">
        <button 
        className='heroButton'>Skills</button>
        </Link>
        <Link href="#projects">
        <button className='heroButton'>Projects</button>
        </Link>
        </div>
        </div>
        
    </div>
  )
}