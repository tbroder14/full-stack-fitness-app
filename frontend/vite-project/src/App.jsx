import { useState } from 'react'
import './App.css'
import BottomButtons from './components/BottomButtons'
import StartWorkout from './components/StartWorkout'
import Exercises from './components/Exercises'
import HistoryPage from './components/HistoryPage'

function App() {

  const [activeTab, setActiveTab] = useState('Start')

  
  return (
    <>
      {activeTab === 'History' && <HistoryPage />}
      {activeTab === 'Start' && <StartWorkout />}
      {activeTab === 'Exercises' && <Exercises />}

      <BottomButtons activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  )
}

export default App
