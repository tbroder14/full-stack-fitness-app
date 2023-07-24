import { useState } from 'react'
import './App.css'
import BottomButtons from './components/BottomButtons'
import StartWorkoutPage from './components/StartWorkoutPage'
import ExercisesPage from './components/ExercisesPage'
import HistoryPage from './components/HistoryPage'

function App () {
  const [activeTab, setActiveTab] = useState('Start')
  const tempTemp = {
    name: 'Workout #1',
    listOfExercises: ['Bench Press (Barbell)', 'Squat (Barbell)']
  }
  const [allTemplates, setAllTemplates] = useState([tempTemp])
  const [workoutHistory, setWorkoutHistory] = useState([])

  return (
    <>
      {activeTab === 'History' && <HistoryPage workoutHistory={workoutHistory} />}
      {activeTab === 'Start' && <StartWorkoutPage allTemplates={allTemplates} setAllTemplates={setAllTemplates} workoutHistory={workoutHistory} setWorkoutHistory={setWorkoutHistory} />}
      {activeTab === 'Exercises' && <ExercisesPage />}

      <BottomButtons activeTab={activeTab} setActiveTab={setActiveTab} />

    </>
  )
}

export default App
