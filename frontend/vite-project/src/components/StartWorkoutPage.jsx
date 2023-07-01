import { useState } from 'react'
import ActiveWorkoutPage from "./ActiveWorkoutPage"
import NewTemplate from "./NewTemplate"
import ShowTemplates from "./ShowTemplates"
import EditCurrentTemplate from './EditCurrentTemplate'
import AddExercisePage from './AddExercisesPage'

export default function StartWorkout({allTemplates, setAllTemplates}) {

    const [activePage, setActivePage] = useState('Show Templates')
    const [showButtons, setShowButtons] = useState(true)    
    const [currentTemplate, setCurrentTemplate] = useState(null)
    const [currentWorkoutExercises, setCurrentWorkoutExercises] = useState([])
    const [originalPageForExercises, setOriginalPageForExercises] = useState(null)
    const [activeWorkoutData, setActiveWorkoutData] = useState([])
    const [workoutData, setWorkoutData] = useState([])


    function handleClick(buttonText) {
        setActivePage(buttonText)
        setShowButtons(false)
    }

    return(
        <>
            {activePage === 'New Template' && <NewTemplate setAllTemplates={setAllTemplates} setActivePage={setActivePage} setShowButtons={setShowButtons} setOriginalPageForExercises={setOriginalPageForExercises} currentWorkoutExercises={currentWorkoutExercises} setCurrentWorkoutExercises={setCurrentWorkoutExercises}/>}
            {activePage === 'Show Templates' && <ShowTemplates allTemplates={allTemplates} setActivePage={setActivePage} setShowButtons={setShowButtons} currentTemplate={currentTemplate} setCurrentTemplate={setCurrentTemplate} setCurrentWorkoutExercises={setCurrentWorkoutExercises}/>}
            {activePage === 'Edit Current Template' && <EditCurrentTemplate setActivePage={setActivePage} allTemplates={allTemplates} setAllTemplates={setAllTemplates} setShowButtons={setShowButtons} setCurrentTemplate={setCurrentTemplate} currentTemplate={currentTemplate} setOriginalPageForExercises={setOriginalPageForExercises} currentWorkoutExercises={currentWorkoutExercises} setCurrentWorkoutExercises={setCurrentWorkoutExercises}/>}
            {activePage === 'Active Workout' && <ActiveWorkoutPage workoutData={workoutData} setWorkoutData={setWorkoutData} setActivePage={setActivePage} setShowButtons={setShowButtons} currentWorkoutExercises={currentWorkoutExercises} setCurrentWorkoutExercises={setCurrentWorkoutExercises} currentTemplate={currentTemplate} setCurrentTemplate={setCurrentTemplate} setOriginalPageForExercises={setOriginalPageForExercises} activeWorkoutData={activeWorkoutData} setActiveWorkoutData={setActiveWorkoutData}/>}
            {activePage === 'Add Exercises' && <AddExercisePage setActivePage={setActivePage} currentWorkoutExercises={currentWorkoutExercises} setCurrentWorkoutExercises={setCurrentWorkoutExercises} originalPageForExercises={originalPageForExercises} setOriginalPageForExercises={setOriginalPageForExercises} />}

            {showButtons && 
                <>
                    <button className={`btn mx-1 my-2 ${activePage === 'New Template' ? 'active' : ''}`} onClick={() => handleClick('New Template')}>New Template</button>
                    <button className={`btn mx-1 my-2 ${activePage === 'Active Workout' ? 'active' : ''}`} onClick={() => handleClick('Active Workout')}>Start Empty Workout</button>
                </>    
            }
        </>
    )

}
