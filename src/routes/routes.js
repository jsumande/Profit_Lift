import React from 'react';
import { Navigate } from "react-router-dom";

/* Routing Setup */
import { pageRoutes } from '../constant';

/* Route Component */

import Login from '../pages/login/Login';

import Registration from '../pages/login/Registration';
import RegistrationSuccess from '../pages/login/RegistrationSuccess';

import InvitePage from '../pages/Invite/InvitePage';
import InviteSuccess from '../pages/Invite/InviteSuccess';

import Wallet from '../pages/wallet/Wallet';

import ErrorPage from '../pages/ErrorPage/ErrorPage';


/* Container */

import Container from '../component/container/Container';

const routes = [
        {
        path: "app",
        children: [
    
          { path: pageRoutes.WALLET, element: <Wallet /> },
      
        ],
      },
      {
        path: "/",
        element: <Container />,
        children: [

            { path: pageRoutes.Invite, element: <InvitePage /> },
            { path: pageRoutes.InviteSuccess, element: <InviteSuccess /> },

            { path: pageRoutes.LOGIN, element: <Login /> },

            { path: pageRoutes.REGISTRATION, element: <Registration /> },
            { path: pageRoutes.REGISTRATIONSUCCESS, element: <RegistrationSuccess /> },

            { path: "*", element: <Navigate to="/404" /> },
            { path: "404", element: <ErrorPage /> },
        ],
      },
  
    ];
    
  
export default routes;