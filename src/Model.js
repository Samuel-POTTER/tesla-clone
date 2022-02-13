import React from 'react';
import { motion } from "framer-motion"
import { ButtonAnimation } from './FramerConf';

export const Model = ({ image, models }) => {

    return (
        <div className='h-screen bg-center flex items-center justify-between py-20 flex-col flex-nowrap bg-cover' style={{backgroundImage: `url(${image})`}}>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} className='text-5xl text-gray-600 font-semibold text-center mt-16'>{models}</motion.span>
            <div className='items-center flex flex-col'>
                <div className='flex space-x-4 mb-8'>
                    <motion.button className='uppercase rounded-full w-64 py-2 h-10 flex justify-center items-center text-sm bg-[#3C3F44] text-white font-semibold'
                        variants={ButtonAnimation}
                        whileInView='animate'
                        initial='initial'
                    >
                        <span className='w-48 flex items-center'>
                            configuration personnalisée
                        </span>
                    </motion.button>
                    <motion.button className='uppercase rounded-full w-64 py-2 h-10 text-sm bg-[#EEEDEB] text-gray-600 font-semibold'
                        variants={ButtonAnimation} 
                        whileInView='animate'
                        initial='initial'
                    >Essais</motion.button>
                </div>
                <span className='underline text-gray-600'>En savoir plus sur Tesla pour les entreprises</span>
            </div>
        </div>
    )
};
