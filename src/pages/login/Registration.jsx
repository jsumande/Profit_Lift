import React , { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import SmarterCtrl from '../../component/logo/smarterctrl';
import CustomButton from '../../component/button/CustomButton';
import LoadingModal from '../../component/modal/LoadingModal';

import { pageRoutes } from '../../constant';

const Registration = () => {

  const navigate = useNavigate();

  const [ password , setPassword ] = useState(null);
  const [ confirmPassword , setConfirmPassword ] = useState(null);
  const [ isUppercase , setIsUppercase ] = useState(false);
  const [ isNumber , setIsNumber ] = useState(false);
  const [ isLength , setIsLength ] = useState(false);

  
  const [ isModalLoadingScreen , setIsModalLoadingScreen ] = useState(false)

  const handlePassword = (event) => {
    setPassword( event.target.value )

    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;

    setIsUppercase ( uppercaseRegex.test(event.target.value) );
    setIsNumber ( numberRegex.test(event.target.value) );
    setIsLength ( event.target.value?.length >= 8 )

  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword( event.target.value )
  }

  const handleNavigate = () => {

    setIsModalLoadingScreen(true)
    setTimeout(() => {
      navigate(pageRoutes.REGISTRATIONSUCCESS)
    }, 1500);

  }

  return (
    <div className='max-w-[450px] w-full flex flex-col'>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <div className='flex flex-col gap-8'>

            <div className='w-full flex flex-col items-center'>
              <SmarterCtrl/>
            </div>
          
            <div className='w-full flex flex-col gap-2 justify-center'>
                <span className='text-gray-700 text-md font-small'>Create a Password</span>
                <TextField type="password" onChange={handlePassword}/>
            </div>


            { password && 

              <div className='w-full flex flex-col'>

                  <span className={`text-md ${ isLength ? 'text-green-500' : 'text-gray-500'} `}><CheckIcon/> At least 8 character</span>
                  <span className={`text-md ${ isUppercase ? 'text-green-500' : 'text-gray-500'}`}><CheckIcon/> At least 1 uppercase</span>
                  <span className={`text-md ${ isNumber ? 'text-green-500' : 'text-gray-500'}`}><CheckIcon/> At least 1 number</span>

              </div>

            }

            <div className='w-full flex flex-col gap-2 justify-center'>
                <span className='text-gray-700 text-md font-small'>Confirm Password</span>
                <TextField type="password" onChange={handleConfirmPassword}/>
            </div>
            
            { confirmPassword !== password && confirmPassword?.length > 0 ? 

            <div className='w-full flex flex-col'>
                <span className={`text-md text-red-500`}><CloseIcon/> Password does not match</span>
            </div>

            : null }

            <CustomButton customFunction={ () => handleNavigate(true) }>
              <span className='text-xl font-small text-white'>Submit</span>
            </CustomButton>

            <LoadingModal open={isModalLoadingScreen}/>


        </div>
      </Slide>

    </div>
  )
}

export default Registration
