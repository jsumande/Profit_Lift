import React , { useState , useEffect } from 'react'

import AddIcon from '@mui/icons-material/Add';

import AppBar from '../../component/AppBar/AppBar'
import ModalContent from '../../component/modal/ModalContent';
import CustomButton from '../../component/button/CustomButton';
import LoadingModal from '../../component/modal/LoadingModal';
import { TopUp, GetAvailableBalance}  from "../../api";
import { Alert } from "../../component/custom-messagebox/swal-alert";
const Wallet = () => {

    const [ balance , setBalance ] = useState(0) 

    const [ isModal , setIsModal ] = useState(false)

    const [ priceRange , setPriceRange ] = useState(null);

    const [ isModalLoadingScreen , setIsModalLoadingScreen ] = useState(false)

    const handlePriceSelected = ( data ) => {

        if ( data  ===  priceRange ) return setPriceRange(null)
        setPriceRange( data );
    }
    useEffect(() => {

      const fetchData = async () => {
        const response = await GetAvailableBalance();
        setBalance(response.topup.amount)
      };

      fetchData();
     
    }, []);

    
    
  const handleSubmit = async () => {
    try {
        let topup = 0;
        switch (priceRange) {
            case 1:
                topup =   50 
              break;
            case 2:
                topup =   100 
              break;
            case 3:
                topup =   250 
              break;
            default:
                topup =   500 
        }
      const response = await TopUp(topup);
      handlePricingProcess();
    } catch (error) {
      Alert("Opss...",  error , "error",)
    }
  };

    const handlePricingProcess =  async () => {
      const response = await GetAvailableBalance();
        setIsModal(false);
        setIsModalLoadingScreen(true)
        setBalance(response.topup.amount)
        setTimeout(() => {
            setIsModalLoadingScreen(false)
        }, 1500);
    }

  return (
    <div className='w-full h-screen bg-gray-100 flex flex-col'>

        <AppBar/>

        <ModalContent open={isModal} handleClose={setIsModal} title={"Top Up Options"}>
            <div className='w-full flex flex-col gap-10'>

                <div className='flex flex-col gap-2 justify-center mt-5 gap-4'>
                    <span className='text-gray-700 text-md font-small'>Select Price Below</span>

                    <div className='w-full flex flex-row flex-wrap items-center justify-between gap-2'>

                        <div onClick={ () => handlePriceSelected(1) } className={`flex flex-col shadow-xl bg-white ${ priceRange === 1 ? 'border border-orange-500' : null } rounded-lg p-5 cursor-pointer hover:bg-gray-100`}>
                            <span className={`${ priceRange === 1 ? 'text-orange-500' : 'text-gray-800' }   font-bold text-2xl`}>50$</span>
                        </div>

                        <div onClick={ () => handlePriceSelected(2) } className={`flex flex-col shadow-xl bg-white ${ priceRange === 2 ? 'border border-orange-500' : null } rounded-lg p-5 cursor-pointer hover:bg-gray-100`}>
                            <span className={`${ priceRange === 2 ? 'text-orange-500' : 'text-gray-800' }   font-bold text-2xl`}>100$</span>
                        </div>

                        <div onClick={ () => handlePriceSelected(3) } className={`flex flex-col shadow-xl bg-white ${ priceRange === 3 ? 'border border-orange-500' : null } rounded-lg p-5 cursor-pointer hover:bg-gray-100`}>
                            <span className={`${ priceRange === 3 ? 'text-orange-500' : 'text-gray-800' }   font-bold text-2xl`}>250$</span>
                        </div>

                        <div onClick={ () => handlePriceSelected(4) } className={`flex flex-col shadow-xl bg-white ${ priceRange === 4 ? 'border border-orange-500' : null } rounded-lg p-5 cursor-pointer hover:bg-gray-100`}>
                            <span className={`${ priceRange === 4 ? 'text-orange-500' : 'text-gray-800' }   font-bold text-2xl`}>500$</span>
                        </div>

                    </div>

                </div>
        
                <CustomButton isDisable={ priceRange ? false : true } customFunction={handleSubmit}>
                    <span className='text-xl font-small text-white'>Proceed</span>
                </CustomButton>

            </div>
        </ModalContent>

        <div className='w-full h-full flex flex-col items-center justify-center'>

            <div className='flex flex-col shadow-lg bg-white rounded p-4 gap-3'>

                <span className='text-gray-400'>Available Balance</span>

                <div className='flex flex-row gap-8 items-center justify-between'>
                    
                    <span className='text-gray-700 font-semibold text-3xl'>${ balance }.00 </span>

                    <div onClick={ () => setIsModal(true) } className='bg-[#ff5a20] py-3 px-5 flex flex-row items-center w-full rounded hover:bg-orange-700 cursor-pointer text-white'>
                        <AddIcon/>
                        <span>Top up</span>
                    </div>
                </div>
   
            </div>
            
        </div>

        <LoadingModal open={isModalLoadingScreen}/>
      
    </div>
  )
}

export default Wallet
