import React , { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import SmarterCtrl from '../../component/logo/smarterctrl';
import CustomButton from '../../component/button/CustomButton';
import ModalContent from '../../component/modal/ModalContent';
import LoadingModal from '../../component/modal/LoadingModal';
import { Invite } from "../../api";
import TextField from '@mui/material/TextField';
import { Alert } from "../../component/custom-messagebox/swal-alert";

import { pageRoutes } from '../../constant';

const InvitePage = () => {

    const navigate = useNavigate();

    const [ isModal , setIsModal ] = useState(false)

    const [ isModalLoadingScreen , setIsModalLoadingScreen ] = useState(false)

    const [email, setEmail] = useState('');


    const handleNavigate = () => {
        setIsModal(false);
        setIsModalLoadingScreen(true)
        setTimeout(() => {
            navigate(pageRoutes.InviteSuccess)
        }, 1500);

    }
    const handleSubmit = async () => {
        try {
          const response = await Invite(email);
          // Handle successful Invite response
          // Redirect user to another page or do something else
          //handleNavigate();
          console.log(response)
        } catch (error) {
          Alert("Opss...",  error , "error",)
        }
      };

      const handleEmailChanged = (event) => {
        setEmail( event.target.value )
      }

  return (
    <div className='w-full flex flex-col items-center gap-10'>

        <ModalContent open={isModal} handleClose={setIsModal} title={"Send Email Invitation"}>
            <div className='w-full flex flex-col gap-10'>
        
                <div className='flex flex-col gap-2 justify-center mt-5'>
                    <span className='text-gray-700 text-md font-small'>Enter Email Address</span>
                    <TextField
                        onChange={handleEmailChanged}
                    />
                </div>

                <CustomButton customFunction={ () => handleSubmit() }>
                    <span className='text-xl font-small text-white'>Send</span>
                </CustomButton>

            </div>
        </ModalContent>

        <LoadingModal open={isModalLoadingScreen}/>

        <SmarterCtrl/>

        <CustomButton customFunction={ () => setIsModal(true) }>
            <span className='text-xl font-small text-white'>Send Email Invitation</span>
        </CustomButton>
      
    </div>
  )
}

export default InvitePage
