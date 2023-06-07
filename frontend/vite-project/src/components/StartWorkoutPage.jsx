import { useState } from 'react'
import StartWorkoutButton from "./StartWorkoutButton"
import NewTemplate from "./NewTemplate"
import ShowTemplates from "./ShowTemplates"
import EditCurrentTemplate from './EditCurrentTemplate'

export default function StartWorkout({allTemplates, setAllTemplates}) {

    const [activePage, setActivePage] = useState('Show Templates')
    const [showButtons, setShowButtons] = useState(true)
    // let allTemplates = []
    
    const [currentTemplate, setCurrentTemplate] = useState(null)

    
    function handleClick(buttonText) {
        setActivePage(buttonText)
        setShowButtons(false)
    }

    return(
        <>
            {activePage === 'New Template' && <NewTemplate setAllTemplates={setAllTemplates} setActivePage={setActivePage} setShowButtons={setShowButtons} />}
            {activePage === 'Start Workout' && <StartWorkoutButton setActivePage={setActivePage} setShowButtons={setShowButtons} />}
            {activePage === 'Show Templates' && <ShowTemplates allTemplates={allTemplates} setActivePage={setActivePage} setShowButtons={setShowButtons} currentTemplate={currentTemplate} setCurrentTemplate={setCurrentTemplate}/>}
            {activePage === 'Edit Current Template' && <EditCurrentTemplate setActivePage={setActivePage} allTemplates={allTemplates} setAllTemplates={setAllTemplates} setShowButtons={setShowButtons} setCurrentTemplate={setCurrentTemplate} currentTemplate={currentTemplate}/>}

            {showButtons && 
                <>
                    <button className={`btn ${activePage === 'New Template' ? 'active' : ''}`} onClick={() => handleClick('New Template')}>New Template</button>
                    <button className={`btn ${activePage === 'Start Workout' ? 'active' : ''}`} onClick={() => handleClick('Start Workout')}>Start Empty Workout</button>
                </>    
            }
        </>
    )

}
