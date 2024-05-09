import React from 'react'

const CustomButton = ({ children , customFunction , isDisable = false }) => {
  return (
    <div onClick={ () => customFunction() } className={` ${isDisable ? 'bg-gray-200' : 'bg-[#ff5a20] hover:bg-orange-700 cursor-pointer' } py-3 max-w-[450px] w-full flex flex-col items-center w-full rounded `}>
      {children}
    </div>
  )
}

export default CustomButton