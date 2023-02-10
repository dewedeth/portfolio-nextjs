import React from 'react';
import {motion} from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img 
        initial={{
            x: -200,
            opacity: 0
        }}
        animate={{
            x: 0,
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/154802870_10222780012903124_264895560379125431_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2GHDaJgREagAX9xF0yu&_nc_ht=scontent-mia3-1.xx&oh=00_AfANaTzwYW_M1Awjnskmjwed-ymI5qGRwSapO3cGfoJzjg&oe=64064577"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a 
            <span className='underline decoration-[#AB0AF7]/50'>
             little
            </span>
              background
             </h4>
             <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis erat et dui maximus pharetra. Suspendisse nec placerat ante. Vivamus elementum dui et arcu pretium, a ornare lectus iaculis. Donec fermentum nulla velit, vitae vehicula quam accumsan nec. Fusce mattis imperdiet commodo. Maecenas luctus risus sit amet mi rhoncus</p>
        </div>
    </motion.div>
  );
}