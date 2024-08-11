'use client';

import { SearchManufacturerProps } from '@/types'
import React, { Fragment, useState } from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions,ComboboxButton ,Transition} from '@headlessui/react'
import Image from 'next/image';
import { manufacturers } from '@/constant';


const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
    const [query, setquery] = useState('');

    const filteredManufacturers = query === ""? 
    manufacturers : manufacturers.filter((item) => {return item.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))})



  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} 
                onChange={setManufacturer}>
            <div className='relative w-full '>
                <ComboboxButton className='absolute top-[14px] ml-2' 
                >
                <Image 
                src='/car-logo.svg'
                width={20}
                height={20}
                alt='Car Logo'
                />
                </ComboboxButton>
                <ComboboxInput className="search-manufacturer__input" placeholder='Volkswagen' displayValue={(manufacturer:string) => manufacturer} 
                onChange={(e) => setquery(e.target.value) }
                />
                <Transition 
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setquery('')}
                >
                    <ComboboxOptions className='search-manufacturer__options z-30'>
                        {
                            filteredManufacturers.map((item) => (
                                <ComboboxOption 
                                key={item}
                                value={item}
                                className={({active})=>`
                                relative search-manufacturer__option
                                ${active? `bg-primary-blue text-white`:`text-gray-900`}`}
                                >
                                {item}
                                </ComboboxOption>
                            )
                        )}
                    </ComboboxOptions>
                </Transition>
            </div>

        </Combobox>
        
    </div>
  )
}

export default SearchManufacturer