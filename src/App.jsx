import { useState } from 'react'
import './App.css'
import History from './pages/student/history/history'
import Formfillup from './pages/student/formfillup/formfillup'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <History />
        <Formfillup></Formfillup>
      </div>
    </>
  )
}

export default App
