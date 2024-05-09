import React , { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import SmarterCtrl from '../../component/logo/smarterctrl';
import CustomButton from '../../component/button/CustomButton';

import { pageRoutes } from '../../constant';

const RegistrationSuccess = () => {
    
    const navigate = useNavigate();

    const handleNavigate = () => {
    
         navigate(pageRoutes.LOGIN)
     
    }

  return (
    <div className='w-full flex flex-col items-center gap-10'>

        <SmarterCtrl/>

        <div className='flex flex-col gap-4 items-center'>
            <span className='text-2xl font-semibold text-[#24a829] text-center'>Password Successfully Set!</span>
            <span className='text-md font-small text-black'>Please check your email.</span>
        </div>
     
        <CustomButton customFunction={ () => handleNavigate(true) }>
            <span className='text-xl font-small text-white'>Sign In</span>
        </CustomButton>
      
    </div>
  )
}

export default RegistrationSuccess
