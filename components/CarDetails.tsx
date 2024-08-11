'use client'

import Image from "next/image";
import { Fragment } from "react";
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { CarProps } from "@/types";


interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}


const CarDetails = ({isOpen, closeModal , car }:CarDetailsProps) => {
  return (
    <>
            <Dialog open={isOpen} as="div" className="relative z-10 " onClose={closeModal}>

                <div className="fixed inset-0 bg-black bg-opacity-25 ">
                    <div className="flex min-h-full items-center justify-center p-4 ">
                        <DialogPanel
                        transition
                        className="w-full max-w-lg text-left flex flex-col gap-5 overflow-y-auto rounded-2xl bg-white  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 relative transform max-h-[90vh] p-6 shadow-xl"
                        >
                            <Button className="flex items-end right-2 top-2 absolute rounded-full z-10 bg-white p-2"><Image 
                            src="/close.svg" alt="Close"
                            width={20}
                            height={20}
                            className='object-contain'
                            onClick={closeModal}
                            /> </Button>

                            <div className="flex flex-1 flex-col gap-3">
                                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                <Image src="/hero.png"  alt='car model' priority fill className='object-contain'/>
                                </div>

                                <div className="flex gap-3">
                                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                    <Image src="/hero.png"  alt='car model' priority fill className='object-contain'/>
                                    </div>
                                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                    <Image src="/hero.png"  alt='car model' priority fill className='object-contain'/>
                                    </div>
                                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                    <Image src="/hero.png"  alt='car model' priority fill className='object-contain'/>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col gap-2 flex-1"> 
                                <h2 className="font-semibold text-xl capitalize">
                                    {car.make} {car.model}
                                </h2>

                                <div className="mt-3 flex flex-wrap gap-4">
                                    {Object.entries(car).map(([key,value])=>(
                                        <div className="justify-between gap-5 w-full text-right flex">
                                        <h4 className="text-grey capitalize">
                                            {key.split("_").join(" ")}
                                        </h4>
                                        <p className="text-black-100 font-semibold">
                                            {value}
                                        </p>
                                        </div>
                                    ) )}
                                </div>
                            </div>
                        </DialogPanel>
                </div>
            </div>

            </Dialog>
    </>
    )
}

export default CarDetails