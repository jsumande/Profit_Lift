import React from 'react'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingModal = ({ open , children , isWhite = true }) => {
  return (
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
    >
        <div className='flex flex-col items-center justify-center h-screen w-full overflow-y-scroll'>
            <div className={`w-[100px] h-[100px] bg-white flex justify-center rounded p-4`}>
                    <span className='text-gray-800 mt-3.5'>
                        <CircularProgress color="inherit" />
                    </span>
            </div>
        </div>
      
    </Backdrop>
  )
}

export default LoadingModal
