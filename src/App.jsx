import { useState } from 'react'
import './App.css'
import History from './pages/student/history/history'
import Formfillup from './pages/student/formfillup/formfillup'
import Provost from './pages/provost/provost'
import { FeeTable } from './pages/student/fee/feetable'
import Progressbar from './pages/ProgressBar/ProgressBar'
import Pdf from './pages/PDF/pdf'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <History />
        <Formfillup></Formfillup>
        <Pdf></Pdf>
        <Provost></Provost>
        <FeeTable></FeeTable>
        <Progressbar></Progressbar>
      </div>
    </>
  )
}

export default App
