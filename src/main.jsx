import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Error from './pages/Error/Error.jsx';
import History from './pages/student/history/history.jsx';
import { FeeTable } from './pages/student/fee/feetable.jsx';
import Formfillup from './pages/student/formfillup/formfillup.jsx';
import Pdf from './pages/PDF/pdf.jsx';
import Payment from './pages/student/fee/payment.jsx';
import Provost from './pages/provost/provost.jsx';
import ExamController from './pages/ExamController/ExamController.jsx';
import Varifier from './pages/Varifier/Varifier.jsx';
import Progressbar from './pages/ProgressBar/ProgressBar.jsx';
import { LogIn } from 'lucide-react';
import Login from './pages/Login/Login.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <History></History>
      },
      {
        path: '/feetable',
        element: <FeeTable></FeeTable>
      },
      {
        path: '/allsections',
        element: <Formfillup></Formfillup>,
      },
      {
        path: '/allsections/:form_id',
        element: <Formfillup></Formfillup>,
        loader: () => fetch('http://bike-csecu.com:5000/api/certificate-withdrawal/search-formData/20701009')
      },
      {
        path: '/pdf',
        element: <Pdf></Pdf>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
      },
      {
        path: '/provost',
        element: <Provost></Provost>
      },
      {
        path: '/examController',
        element: <ExamController></ExamController>
      },
      {
        path: '/varifier',
        element: <Varifier></Varifier>
      },
      {
        path: '/progressbar',
        element: <Progressbar></Progressbar>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
