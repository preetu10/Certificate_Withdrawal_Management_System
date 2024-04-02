import { useState } from 'react'
import './App.css'
import History from './pages/student/history/history'
import Formfillup from './pages/student/formfillup/formfillup'
import Provost from './pages/provost/provost'
import { FeeTable } from './pages/student/fee/feetable'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <History />
        <Formfillup></Formfillup>
        <Provost></Provost>
        <FeeTable></FeeTable>
      </div>
    </>
  )
}

export default App
