import React , { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import SmarterCtrl from '../../component/logo/smarterctrl';
import CustomButton from '../../component/button/CustomButton';
import LoadingModal from '../../component/modal/LoadingModal';

import { SingIn } from "../../api";
import { Alert } from "../../component/custom-messagebox/swal-alert";
import { pageRoutes } from '../../constant';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [ password , setPassword ] = useState(null);
  const [ confirmPassword , setConfirmPassword ] = useState(null);

 
  

  const [ isModalLoadingScreen , setIsModalLoadingScreen ] = useState(false)


  const handleConfirmPassword = (event) => {
    setConfirmPassword( event.target.value )
  }

  const handleEmailChanged = (event) => {
    setEmail( event.target.value )
  }

  const handleSubmit = async () => {
    try {
      const response = await SingIn(email, confirmPassword);
      //handleNavigate();
    } catch (error) {
      Alert("Opss...",  error , "error",)
    }
  };

  const handleNavigate = () => {

    
    setIsModalLoadingScreen(true)
    setTimeout(() => {
      navigate(pageRoutes.WALLET)
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
                <span className='text-gray-700 text-md font-small'>Email Address</span>
                <TextField type="email" onChange={handleEmailChanged}/>
            </div>

            <div className='w-full flex flex-col gap-2 justify-center'>
                <span className='text-gray-700 text-md font-small'>Password</span>
                <TextField type="password" onChange={handleConfirmPassword}/>
            </div>
            
            {/* { confirmPassword ? 

            <div className='w-full flex flex-col'>
                <span className={`text-md text-red-500`}><CloseIcon/> You've entered the wrong password</span>
            </div>

            : null } */}

            <CustomButton customFunction={ () => handleSubmit() }>
              <span className='text-xl font-small text-white'>Submit</span>
            </CustomButton>

            <LoadingModal open={isModalLoadingScreen}/>


        </div>
      </Slide>

    </div>
  )
}

export default Login
