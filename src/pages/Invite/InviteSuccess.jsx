import React , { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import CustomButton from '../../component/button/CustomButton';

import { pageRoutes } from '../../constant';

const InviteSuccess = () => {
    
    const navigate = useNavigate();

    const handleNavigate = () => {

        navigate(pageRoutes.REGISTRATION)
    
    }

  return (
    <div className='w-full flex flex-col items-center gap-10'>

        <div className='flex flex-col gap-4 items-center'>
            <span className='text-4xl font-semibold text-[#24a829] text-center w-full'>Invitation Successfully Sent!</span>
            <span className='text-xl font-small text-black'>Please check your email.</span>
        </div>
     

        <CustomButton customFunction={ () => handleNavigate(true) }>
            <span className='text-xl font-small text-white'>Proceed</span>
        </CustomButton>
      
    </div>
  )
}

export default InviteSuccess
