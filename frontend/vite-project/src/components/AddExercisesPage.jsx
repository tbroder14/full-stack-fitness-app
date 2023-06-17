import { useState } from 'react'
import  exerciseList from '../data'

export default function AddExercisePage({setActivePage, setCurrentWorkoutExercises, setCurrentTemplate, currentWorkoutExercises}) {
    
    const [activeExercises, setActiveExercises] = useState(currentWorkoutExercises)

    const selectedExercises = (e) => {
        if (activeExercises.includes(e.target.value)) {
            const arrayCopy = [...activeExercises]
            const newIndex = activeExercises.indexOf(e.target.value)
            arrayCopy.splice(newIndex, 1)
            setActiveExercises(arrayCopy)
        } else {
            setActiveExercises(prevState => [...prevState, e.target.value])
        }
    }

    function handleForm(e) {
        e.preventDefault() 
        
        
        setActivePage('Active Workout')
        setCurrentWorkoutExercises(activeExercises)
    } 

    return (
        <>
            <div class="sticky top-0">
                <div className="flex justify-between content-center mb-2"> 
                    <button className="btn btn-square" onClick={() => handleForm}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <h1 className="text-3xl my-2">Add Exercises</h1>
                    <div className="btn">Add</div>
                </div>
                <div className="flex mb-4">
                    <div className="dropdown dropdown-right w-full">
                            <label tabIndex={0} className="btn my-2 w-full">Muscle</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-left w-full">
                            <label tabIndex={0} className="btn my-2 w-full">Equipment</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                    </div>
                </div>
            </div>
            <form onSubmit={handleForm}>
                              
                {exerciseList.map((exercise, index) => {
                    return(
                    <div className="form-control my-2 grid h-14 card bg-base-300 px-2" key={index}>
                        <label className="label cursor-pointer">
                            <span className="label-text">{exercise.name}</span> 
                            <input 
                                type="checkbox" 
                                className="checkbox" 
                                value={exercise.name} 
                                checked={activeExercises.includes(exercise.name)}
                                onChange={selectedExercises}/>
                        </label>
                    </div>)
                })}
                <input type="submit" value="Add Exercises" className="btn btn-primary mt-4 mb-20"/>
            </form> 
        </>
    )
}