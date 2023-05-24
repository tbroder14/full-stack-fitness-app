import { useState } from 'react'
import StartWorkoutButton from "./StartWorkoutButton"
import EditTemplate from "./EditTemplate"
import NewTemplate from "./NewTemplate"

export default function StartWorkout() {

    const [activePage, setActivePage] = useState('Edit Template')
    const [showButtons, setShowButtons] = useState(true)
    // let allTemplates = []
    const [allTemplates, setAllTemplates] = useState([])
    
    function editTemplate() {
        console.log('edit template function works')

    }

    function newTemplate() {
        console.log('new template function works')

    }

    function startWorkout() {
        console.log('start workout function works')

    }

    function handleClick(buttonText) {
        setActivePage(buttonText)
        setShowButtons(false)
    }

    return(
        <>
            {activePage === 'New Template' && <NewTemplate setAllTemplates={setAllTemplates} setActivePage={setActivePage} setShowButtons={setShowButtons} />}
            {activePage === 'Start Workout' && <StartWorkoutButton setActivePage={setActivePage} setShowButtons={setShowButtons} />}
            {activePage === 'Edit Template' && <EditTemplate allTemplates={allTemplates} setShowButtons={setShowButtons}/>}
            
            {showButtons && 
                <>
                    <button className={`btn  ${activePage === 'New Template' ? 'active' : ''}`} onClick={() => handleClick('New Template')}>New Template</button>
                    <button className={`btn ${activePage === 'Start Workout' ? 'active' : ''}`} onClick={() => handleClick('Start Workout')}>Start Empty Workout</button>
                </>    
            }

            {/* <label htmlFor="my-modal-3" className="btn" onClick={startWorkout}>Start Workout</label> */}
            {/* {activePage === 'Edit Template' ? 'active' : ''} onClick={() => {setActivePage('Edit Template')}} */}

        </>
    )

}
