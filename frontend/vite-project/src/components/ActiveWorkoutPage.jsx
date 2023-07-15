import { useEffect, useState } from "react"

export default function ActiveWorkoutPage({setActivePage, setShowButtons, currentTemplate, setCurrentTemplate, currentWorkoutExercises, setCurrentWorkoutExercises, activeWorkoutData, setActiveWorkoutData, workoutData, setWorkoutData}) {

    // start timer 
    // how to delete an exercise from a workout? hamburger button/three dots for menu? 
    // save button - posts workout to database; then resets current workout template/array to original
    // when starting template workout, allow for workout name to be changed after adding exercises
    // when starting template workout, update added exercises

    useEffect(() => {
        const updatedWorkoutData = currentWorkoutExercises.reduce((acc, exercise) => {
            const exerciseExists = workoutData.some((item) => item.name === exercise);
            if (!exerciseExists) {
                const newExercise = {
                name: exercise,
                sets: [
                { weight: '50', reps: '10', distance: '0', seconds: '0', notes: '' },
                { weight: '60', reps: '8', distance: '0', seconds: '0', notes: '' },
            ],};
            return [...acc, newExercise];
            }
            return acc;
        }, workoutData);
        const draftWorkoutData = updatedWorkoutData.filter((item) =>
            currentWorkoutExercises.includes(item.name));
        setWorkoutData(draftWorkoutData);
    }, [currentWorkoutExercises]);
    

    const startOfWorkoutTime = new Date().getHours()
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
        setActiveWorkoutData(workoutData)
        setActivePage('Add Exercises')
    }

    function addNote() {
        // console.log('add note')
        setWorkoutData((prevData) => {
            const updatedData = prevData.map((e) => {
                if (exercise === e.name) {
                    const updatedNestedArray = [...e.sets, { weight:"60", reps:"8", distance:"0", seconds:"0", notes:"" }];
                    return { ...e, sets: updatedNestedArray };
                }
                return e;
            });
            return updatedData;
        });
    }

    function deleteExercise(exercise, index) {
        setWorkoutData((prevData) => {
            const updatedData = prevData.map((e) => {
                if (e.name === exercise) {
                workoutData.splice(index, 1)
            } 
            return e
        })
        return updatedData
        });

        const newTempCurrentExercisesArray = currentWorkoutExercises.filter((item) => item !== exercise);
        setCurrentWorkoutExercises(newTempCurrentExercisesArray)
    }
        
    function updateWeight() {
    }

    function updateReps() {
    }

    const addSet = (exercise, event) => {
        event.preventDefault();

        setWorkoutData((prevData) => {
            const updatedData = prevData.map((e) => {
                if (exercise === e.name) {
                    const updatedNestedArray = [...e.sets, { weight:"60", reps:"8", distance:"0", seconds:"0", notes:"" }];
                    return { ...e, sets: updatedNestedArray };
                }
                return e;
            });
            return updatedData;
        });
    };

    function finishWorkout() {
        console.log('this workout would be saved')
        // const finalWorkoutData = 
        // {
        // date:"5/14/2012",
        // exerciseName:"One-Arm Dumbbell Row",
        // workoutName:"",
        // equipment:"",
        // set:[
        //     {weight:"50", reps:"10", distance:"0", seconds:"0", notes:""},
        //     {weight:"60", reps:"8", distance:"0", seconds:"0", notes:""}]
        // }
    }

    function returnToHomePageButton() {
        setActiveWorkoutData([])
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
                <div className="btn h-6 w-16" type="submit" value="Save Template">Save</div>
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
                {workoutData &&
                    <div className="p-1">
                        {workoutData.map((exercise, index) => 
                        <div className="text-left mt-3 font-bold" key={index}>
                            <div className='text-lg'> {exercise.name}
                            <span>
                                <details className="dropdown">
                                    <summary className="ml-2 btn font-bold">...</summary>
                                    <ul className="p-2 shadow menu dropdown-content bg-neutral rounded-box w-40">
                                        <li>
                                            <button onClick={addNote} className="w-full text-left text-base">Add Note</button>
                                        </li>
                                        <li>
                                            <button onClick={(event) => deleteExercise(exercise.name, index)} className="w-full text-left text-base">Delete Exercise</button>
                                        </li>
                                    </ul>
                                </details>
                            </span>
                        </div>
                        <form>
                            <table className="w-full text-center border-separate border-spacing-2">
                                <thead>
                                    <tr className="text-center">
                                        <th>Set</th>
                                        <th>Previous</th>
                                        <th className="w-16 m-0">lbs</th>
                                        <th>Reps</th>
                                        <th>CM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {exercise.sets.map((row, index) =>
                                    <tr key={index}>
                                        <td className="bg-black rounded-lg h-8">{index+1}</td>
                                        <td className="mx-8 h-8 w-28">140x8</td>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="Weight" 
                                                id="weight" 
                                                placeholder={row.weight}
                                                className="input bg-black rounded-lg w-16 text-center h-8"
                                                // onChange={updateWeight}
                                            /></td>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="Reps" 
                                                id="reps" 
                                                placeholder={row.reps}
                                                className="input bg-black rounded-lg w-16 text-center h-8"
                                                onChange={updateReps}
                                            /></td>
                                        <td>CM</td>
                                    </tr> 
                                    )}  
                                    <tr>
                                        <td colSpan="5">
                                            <button className="btn w-full mt-1 mb-2" onClick={(event) => addSet(exercise.name, event)}>Add Set</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>   
                        </form>
                        <hr className="border-b border-black"/>
                    </div>)}
                </div>}
            </div>
            <button className="btn m-4" onClick={addExercises}>Add Exercises</button>
            <button className="btn btn-primary m-4" onClick={finishWorkout}>Finish Workout</button>
            <button className="btn btn-secondary mt-2 mb-20" onClick={() => returnToHomePageButton()}>Cancel Workout</button>
        </>
    )
}