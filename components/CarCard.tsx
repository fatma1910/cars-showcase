'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent } from '@/utils'
import { CarDetails } from '.'


interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }:CarCardProps) => {

    const { city_mpg, year, make , drive , transmission, model} = car ;

    const [isOpen, setIsOpen] = useState(false);
    const carRent = calculateCarRent(city_mpg,year);


    

  return (
    <div className='car-card group '>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
            {carRent}
            <span className='self-end text-[14px] font-semibold'>
                /day
            </span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src="/hero.png"  alt='car model' priority fill className='object-contain'/>

        </div>

        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src='/steering-wheel.svg' alt='sreering wheel' width={20} height={20}/>
                    <p className='text-[14px]'>
                        {transmission==='a'?'Automatic' : 'Manual'}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src='/tire.svg' alt='tire' width={20} height={20}/>
                    <p className='text-[14px]'>
                        {drive.toLocaleUpperCase()}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src='/gas.svg' alt='gas' width={20} height={20}/>
                    <p className='text-[14px]'>
                        {city_mpg} MPG
                    </p>
                </div>
            </div>

            <div className='car-card__btn-container'>
                <CustomButton title='View More' containerStyle='w-full py-[16px] rounded-full bg-primary-blue '
                textStyles="text-white tetx-[14px] leading-[17px] font-bold"
                rigthIcon="/right-arrow.svg"
                handleClick={()=> setIsOpen(true)}
                />
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={()=> setIsOpen(false)} car={car} />
    </div>
  )
} 

export default CarCard