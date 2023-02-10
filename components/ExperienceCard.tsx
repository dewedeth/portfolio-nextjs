/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y: 100,
            opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/SWBdKhJZRTWUpItHay7Q_byKdqp3Qn6mu4zGQcFTA_javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
        alt="Next js"
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>FREELANCE JAVASCRIPT</h4>
            <p className='font-bold text-2xl mt-1'>HOBBY</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
                alt=""
                />
                <img className='h-10 w-10 rounded-full' src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
                alt=""
                />
                <img className='h-10 w-10 rounded-full' src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
                alt=""
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started since... - Present...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
            </ul>
        </div>
    </article>
  )
}