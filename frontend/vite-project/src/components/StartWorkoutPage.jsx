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

    function handleClick(buttonText) {
        setActivePage(buttonText)
        setShowButtons(false)
    }

    return(
        <>
            {activePage === 'New Template' && <NewTemplate setAllTemplates={setAllTemplates} setActivePage={setActivePage} setShowButtons={setShowButtons} />}
            {activePage === 'Show Templates' && <ShowTemplates allTemplates={allTemplates} setActivePage={setActivePage} setShowButtons={setShowButtons} currentTemplate={currentTemplate} setCurrentTemplate={setCurrentTemplate} setCurrentWorkoutExercises={setCurrentWorkoutExercises}/>}
            {activePage === 'Edit Current Template' && <EditCurrentTemplate setActivePage={setActivePage} allTemplates={allTemplates} setAllTemplates={setAllTemplates} setShowButtons={setShowButtons} setCurrentTemplate={setCurrentTemplate} currentTemplate={currentTemplate}/>}
            {activePage === 'Active Workout' && <ActiveWorkoutPage setActivePage={setActivePage} setShowButtons={setShowButtons} currentWorkoutExercises={currentWorkoutExercises} setCurrentWorkoutExercises={setCurrentWorkoutExercises} currentTemplate={currentTemplate} setCurrentTemplate={setCurrentTemplate}/>}
            {activePage === 'Add Exercises' && <AddExercisePage setActivePage={setActivePage} currentWorkoutExercises={currentWorkoutExercises} setCurrentWorkoutExercises={setCurrentWorkoutExercises}/>}

            {showButtons && 
                <>
                    <button className={`btn ${activePage === 'New Template' ? 'active' : ''}`} onClick={() => handleClick('New Template')}>New Template</button>
                    <button className={`btn ${activePage === 'Active Workout' ? 'active' : ''}`} onClick={() => handleClick('Active Workout')}>Start Empty Workout</button>
                </>    
            }
        </>
    )

}
