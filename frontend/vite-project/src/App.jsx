import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [exerciseText, setExerciseText] = useState([])
  const [currentDate, setCurrentDate] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const fetchAPI = async () => {
    setButtonDisabled(true)
    const results = await fetch(`http://localhost:3001/get-exercise-for-day?date=${currentDate}`)
    const data = await results.json()
    setExerciseText(data) 
    setButtonDisabled(false)
  }
  
  return (
    <>
      <Navbar />
      <div><input type="date" onChange={(e) => setCurrentDate(e.target.value)}/></div>
      <button className='btn' onClick={fetchAPI} disabled={buttonDisabled}>
        Fetch Request 
      </button>
      <div>
        {exerciseText.map(exercise => {
          return <span key={exercise.equipment}>{exercise.equipment}</span>
        })}
      </div>
    </>
  )
}

export default App
