import { useState } from 'react'
import './App.css'
import BottomButtons from './components/BottomButtons'
import StartWorkoutPage from './components/StartWorkoutPage'
import ExercisesPage from './components/ExercisesPage'
import HistoryPage from './components/HistoryPage'

function App() {

  const [activeTab, setActiveTab] = useState('Start')
  const tempTemp = {
        name: 'Workout #1',
        listOfExercises: ['Barbell Bench Press', 'Barbell Squat']
    }
    const [allTemplates, setAllTemplates] = useState([tempTemp])

  return (
    <>
      {activeTab === 'History' && <HistoryPage />}
      {activeTab === 'Start' && <StartWorkoutPage allTemplates={allTemplates} setAllTemplates={setAllTemplates}/>}
      {activeTab === 'Exercises' && <ExercisesPage />}

      <BottomButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      
    </>
  )
}

export default App
