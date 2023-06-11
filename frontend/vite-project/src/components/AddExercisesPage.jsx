import { useState } from 'react'
import { exerciseList } from '../data'

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
            <h1 className="text-4xl my-2">Add Exercises</h1>
            
            <form onSubmit={handleForm}>
                              
                {exerciseList.map((exercise, index) => {
                    return(
                    <div className="form-control" key={index}>
                        <label className="label cursor-pointer">
                            <span className="label-text">{exercise}</span> 
                            <input 
                                type="checkbox" 
                                className="checkbox" 
                                value={exercise} 
                                checked={activeExercises.includes(exercise)}
                                onChange={selectedExercises}/>
                        </label>
                    </div>)
                })}
                <input type="submit" value="Add Exercises" className="btn btn-primary my-4"/>
            </form> 
        </>
    )
}