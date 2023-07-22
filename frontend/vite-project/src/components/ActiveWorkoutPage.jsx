import { useEffect, useState } from 'react'

export default function ActiveWorkoutPage ({ setActivePage, setShowButtons, currentTemplate, setCurrentTemplate, currentWorkoutExercises, setCurrentWorkoutExercises, activeWorkoutData, setActiveWorkoutData, workoutData, setWorkoutData }) {
  // start timer
  // how to delete an exercise from a workout? hamburger button/three dots for menu?
  // save button - posts workout to database; then resets current workout template/array to original
  // when starting template workout, allow for workout name to be changed after adding exercises
  // when starting template workout, update added exercises

  useEffect(() => {
    const updatedWorkoutData = currentWorkoutExercises.reduce((acc, exercise) => {
      const exerciseExists = workoutData.some((item) => item.name === exercise)
      if (!exerciseExists) {
        const newExercise = {
          name: exercise,
          sets: [
            { weight: '50', reps: '10', distance: '0', seconds: '0', notes: '' },
            { weight: '60', reps: '8', distance: '0', seconds: '0', notes: '' }
          ]
        }
        return [...acc, newExercise]
      }
      return acc
    }, workoutData)
    const draftWorkoutData = updatedWorkoutData.filter((item) =>
      currentWorkoutExercises.includes(item.name))
    setWorkoutData(draftWorkoutData)
  }, [currentWorkoutExercises])

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
    } else if (startOfWorkoutTime >= 17 && startOfWorkoutTime <= 20) {
      currentWorkoutName = 'Evening Workout'
    }
  } else {
    currentWorkoutName = currentTemplate.name
  }

  const [workoutName, setWorkoutName] = useState(currentWorkoutName)
  function updateName (e) {
    setWorkoutName(e.target.value)
  }

  function addExercises () {
    setActiveWorkoutData(workoutData)
    setActivePage('Add Exercises')
  }

  function addNote (exercise) {
    // // console.log('add note')
    // setWorkoutData((prevData) => {
    //   const updatedData = prevData.map((e) => {
    //     if (exercise === e.name) {
    //       const updatedNestedArray = [...e.sets, { weight: '60', reps: '8', distance: '0', seconds: '0', notes: '' }]
    //       return { ...e, sets: updatedNestedArray }
    //     }
    //     return e
    //   })
    //   return updatedData
    // })
  }

  function deleteExercise (exercise, index) {
    setWorkoutData((prevData) => {
      const updatedData = prevData.map((e) => {
        if (e.name === exercise) {
          workoutData.splice(index, 1)
        }
        return e
      })
      return updatedData
    })

    const newTempCurrentExercisesArray = currentWorkoutExercises.filter((item) => item !== exercise)
    setCurrentWorkoutExercises(newTempCurrentExercisesArray)
  }

  //   function updateWeight () {
  //   }

  function updateReps () {
  }

  const shiftExerciseUp = (workoutData, fromIndex) => {
    if (fromIndex !== 0) {
      const toIndex = fromIndex - 1
      const exerciseToMove = workoutData[fromIndex]
      const updatedWorkoutData = [...workoutData]
      updatedWorkoutData.splice(fromIndex, 1)
      updatedWorkoutData.splice(toIndex, 0, exerciseToMove)
      setWorkoutData(updatedWorkoutData)
    }
  }

  const shiftExerciseDown = (workoutData, fromIndex) => {
    const toIndex = fromIndex + 1
    const exerciseToMove = workoutData[fromIndex]
    const updatedWorkoutData = [...workoutData]
    updatedWorkoutData.splice(fromIndex, 1)
    updatedWorkoutData.splice(toIndex, 0, exerciseToMove)
    setWorkoutData(updatedWorkoutData)
  }

  //   function completedSets () {
  //     console.log('box is checked')
  //   }

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
  }

  const addSet = (exercise, event) => {
    event.preventDefault()

    setWorkoutData((prevData) => {
      const updatedData = prevData.map((e) => {
        if (exercise === e.name) {
          const updatedNestedArray = [...e.sets, { weight: '60', reps: '8', distance: '0', seconds: '0', notes: '' }]
          return { ...e, sets: updatedNestedArray }
        }
        return e
      })
      return updatedData
    })
  }

  function finishWorkout () {
    console.log('this workout would be saved')
    // const finalWorkoutData =
    // {
    // date:"5/14/2012",
    // exerciseName:,
    // workoutName: workoutName,
    // equipment:"",
    // set:[
    //     {weight:"50", reps:"10", distance:"0", seconds:"0", notes:""},
    //     {weight:"60", reps:"8", distance:"0", seconds:"0", notes:""}]
    // }
  }

  function returnToHomePageButton () {
    setActiveWorkoutData([])
    setCurrentWorkoutExercises([])
    setCurrentTemplate(null)
    setActivePage('Show Templates')
    setShowButtons(true)
  }

  return (
    <>
      <div className='flex justify-between content-center'>
        <button className='btn btn-square' onClick={() => returnToHomePageButton()}>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' /></svg>
        </button>
        <h1 className='text-2xl self-center'>ACTIVE WORKOUT</h1>
        <div className='btn h-6 w-16' type='submit' value='Save Template'>Save</div>
      </div>
      <div className='form-control'>
        <label className='label cursor-pointer'>
          <span className='label-text'>Workout Name</span>
          <input
            type='text'
            name='Name'
            id='Name'
            value={workoutName}
            onChange={updateName}
            placeholder='Workout Name'
            className='input input-bordered w-full input-lg max-w-xs my-2'
            required
          />
        </label>
      </div>
      <div>
        {workoutData &&
          <div className='p-1'>
            {workoutData.map((exercise, index) =>
              <div className='text-left mt-3 font-bold' key={index}>
                <span className='flex justify-between content-center items-center'>
                  <div className='text-base'> {exercise.name}
                  </div>
                  <div className='flex content-center items-center'>
                    <div>
                      <details className='dropdown'>
                        <summary className='ml-2 btn mr-1 font-bold'>...</summary>
                        <ul className='p-2 shadow menu dropdown-content bg-neutral rounded-box w-40'>
                          <li>
                            <button onClick={addNote} className='w-full text-left text-base'>Add Note</button>
                          </li>
                          <li>
                            <button onClick={(event) => deleteExercise(exercise.name, index)} className='w-full text-left text-base'>Delete Exercise</button>
                          </li>
                        </ul>
                      </details>
                    </div>
                    <div className='flex content-center items-center'>
                      <svg className='inline nowrap' onClick={() => shiftExerciseUp(workoutData, index)} width='58px' height='58px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' clipRule='evenodd' d='M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355ZM8.46967 14.0303C8.76256 14.3232 9.23744 14.3232 9.53033 14.0303L12 11.5607L14.4697 14.0303C14.7626 14.3232 15.2374 14.3232 15.5303 14.0303C15.8232 13.7374 15.8232 13.2626 15.5303 12.9697L12.5303 9.96967C12.3897 9.82902 12.1989 9.75 12 9.75C11.8011 9.75 11.6103 9.82902 11.4697 9.96967L8.46967 12.9697C8.17678 13.2626 8.17678 13.7374 8.46967 14.0303Z' fill='#1B192E' />
                      </svg>
                      <svg className='inline nowrap' onClick={() => shiftExerciseDown(workoutData, index)} width='58px' height='58px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' clipRule='evenodd' d='M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM8.46967 9.96967C8.76256 9.67678 9.23744 9.67678 9.53033 9.96967L12 12.4393L14.4697 9.96967C14.7626 9.67678 15.2374 9.67678 15.5303 9.96967C15.8232 10.2626 15.8232 10.7374 15.5303 11.0303L12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303L8.46967 11.0303C8.17678 10.7374 8.17678 10.2626 8.46967 9.96967Z' fill='#1B192E' />
                      </svg>
                    </div>
                  </div>
                </span>
                <form>
                  <table className='w-full text-center border-none'>
                    <thead>
                      <tr className='text-center'>
                        <th className='text-right'>Set</th>
                        <th>Previous</th>
                        <th className='w-16 m-0'>lbs</th>
                        <th>Reps</th>
                        <th className='text-left'>CM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exercise.sets.map((row, index) =>
                        <tr key={index} id='set row' className={`h-12 rounded-lg ${isChecked ? 'bg-neut ral' : ''}`}>
                          <td className='align-middle'><div className='bg-black rounded-lg h-8 pt-1'>{index + 1}</div></td>
                          <td className='mx-8 h-8 w-36'>140x8</td>
                          <td className=''>
                            <input
                              type='number'
                              name='Weight'
                              id='weight'
                              min='1'
                              max='999'
                              placeholder={row.weight}
                              className='input bg-black rounded-lg w-16 h-8 text-center'
                            />
                          </td>
                          <td>
                            <input
                              type='number'
                              name='Reps'
                              id='reps'
                              min='1'
                              max='999'
                              placeholder={row.reps}
                              className='input bg-black rounded-lg w-16 text-center h-8'
                              onChange={updateReps}
                            />
                          </td>
                          <td>
                            <input
                              type='checkbox'
                              className='checkbox'
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td colSpan='5'>
                          <button className='btn w-full mt-1 mb-2' onClick={(event) => addSet(exercise.name, event)}>Add Set</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
                <hr className='border-b border-black' />
              </div>)}
          </div>}
      </div>
      <button className='btn m-4' onClick={addExercises}>Add Exercises</button>
      <button className='btn btn-primary m-4' onClick={finishWorkout}>Finish Workout</button>
      <button className='btn btn-secondary mt-2 mb-20' onClick={() => returnToHomePageButton()}>Cancel Workout</button>
    </>
  )
}
