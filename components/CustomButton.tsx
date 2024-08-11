"use client"

import { CustomButtonProp } from "@/types"
import Image from "next/image"


const CustomButton = ({title , containerStyle , handleClick , btnType,textStyles,rigthIcon , isDisabled}:CustomButtonProp) => {
  return (
    <button
    disabled={false}
    type={btnType|| "button"}
    className={`custom-btn ${containerStyle} ` }
    onClick={handleClick}
    
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rigthIcon && (
          <div className="relative w-6 h-6 ">
            <Image src={rigthIcon} alt="right icon" fill className="object-contain"/>
          </div>
        )}
    </button>
  )
}

export default CustomButton