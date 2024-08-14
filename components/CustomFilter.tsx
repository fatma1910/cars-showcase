'use client'
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";


const CustomFilter = ({title, options , setFilter}: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();


  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e)=> {
        setSelected(e);
        setFilter(e.value);
      }}>
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src='/chevron-up-down.svg'
              width={20}
              height={20}
              alt="chevron up down"
              className="ml-4 object-contain"
            />
          </ListboxButton>
          <ListboxOptions
            className="custom-filter__options absolute w-full mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.title}
                value={option}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 px-4 ${
                    active ? 'bg-primary-blue text-white' : 'text-gray-900'
                  }`
                }
              >
                {({ selected }) => (
                  <span className={`block truncate ${selected ? 'font-medium': 'font-normal'}`}>{option.title}</span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
