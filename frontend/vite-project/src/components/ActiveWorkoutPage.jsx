import { useState } from "react"

export default function ActiveWorkoutPage({setActivePage, setShowButtons, currentTemplate, setCurrentTemplate, currentWorkoutExercises, setCurrentWorkoutExercises}) {

    // start timer 
    // how to delete an exercise from a workout? hamburger button/three dots for menu? 
    // save button - posts workout to database; then resets current workout template/array to original
    // when starting template workout, allow for workout name to be changed after adding exercises
    // when starting template workout, update added exercises  

    const startOfWorkoutTime = new Date().getHours()
    const finishedWorkout = ''
    let currentWorkoutName = ''
    
    if (currentTemplate === null) {
        if (startOfWorkoutTime >= 21 || startOfWorkoutTime <= 4) {
        currentWorkoutName = 'Night Workout'
        } else if (startOfWorkoutTime >= 5 && startOfWorkoutTime <= 7) {
            currentWorkoutName = 'Early Morning Workout'
        } else if (startOfWorkoutTime >= 8 && startOfWorkoutTime <= 10) {
            currentWorkoutName = 'Morning Workout'
        } else if (startOfWorkoutTime >= 11 && startOfWorkoutTime <= 13) {
            currentWorkoutName = 'Mid-day Workout'
        } else if (startOfWorkoutTime >= 14 && startOfWorkoutTime <= 16) {
            currentWorkoutName = 'Afternoon Workout'
        } else if (startOfWorkoutTime >=17 && startOfWorkoutTime <= 20) {
            currentWorkoutName = 'Evening Workout'
        }    
    } else {
        currentWorkoutName = currentTemplate.name
    }

    const [workoutName, setWorkoutName] = useState(currentWorkoutName)
   
    function updateName(e) {
        setWorkoutName(e.target.value)
    }

    function addExercises() {
        setActivePage('Add Exercises')
    }

    function finishWorkout() {
        console.log('this workout would be saved')
    }

    function addSet(){

    }

    function returnToHomePageButton() {
        setCurrentWorkoutExercises([])
        setCurrentTemplate(null)
        setActivePage('Show Templates')
        setShowButtons(true) 
    }

    return (
        <>
            <div className="flex justify-between content-center">
                <button className="btn btn-square" onClick={() => returnToHomePageButton()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <h1 className="text-2xl self-center">ACTIVE WORKOUT</h1>
                <div className="btn" type="submit" value="Save Template">Save</div>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Workout Name</span> 
                    <input 
                        type="text" 
                        name="Name" 
                        id="Name" 
                        value={workoutName} 
                        onChange={updateName} 
                        placeholder='Workout Name'
                        className="input input-bordered w-full input-lg max-w-xs my-2"
                        required
                    />
                </label>
            </div>
            <div>
                {currentWorkoutExercises == [] &&
                    <>

                    </>                    
                
                }
            </div>
            <div>
                {currentWorkoutExercises &&
                    <>
                        <div className="p-1">
                            {currentWorkoutExercises.map((exercise, index) => <div className="text-left my-2 font-bold" key={index}>{exercise}
                                <>
                                    <table className="w-full text-center mb-2 border-spacing-8">
                                        <thead>
                                            <tr className="text-center bold">
                                                <th>Set</th>
                                                <th>Previous</th>
                                                <th>lbs</th>
                                                <th>Reps</th>
                                                <th>CM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="bg-black rounded-lg m-1 border-spacing-x-1">1</td>
                                                <td>140x8</td>
                                                <td className="bg-black rounded-lg m-1 ml-2">50</td>
                                                <td className="bg-black rounded-lg m-1">8</td>
                                                <td>CM</td>
                                            </tr>   
                                            <tr className="h-2">
                                                <td colSpan="5">
                                                    <button className="btn w-full h-1">Add Set</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            </div>)}
                        </div>
                    </>    
                }
               
            </div>
            <button className="btn m-2" onClick={addExercises}>Add Exercises</button>
            <button className="btn btn-primary m-2" onClick={finishWorkout}>Finish Workout</button>
            <button className="btn btn-secondary mt-2 mb-20" onClick={() => returnToHomePageButton()}>Cancel Workout</button>

        </>
    )
}