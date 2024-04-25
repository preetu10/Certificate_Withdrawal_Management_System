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
        element: <Formfillup></Formfillup>
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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
