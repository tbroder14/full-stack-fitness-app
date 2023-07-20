import { useState, useEffect } from 'react'
import { muscle, equipment, sortedExerciseList } from '../data'

export default function AddExercisePage ({ setActivePage, setCurrentWorkoutExercises, setOriginalPageForExercises, currentWorkoutExercises, originalPageForExercises }) {
  const [activeExercises, setActiveExercises] = useState(currentWorkoutExercises)
  const [muscleSort, setMuscleSort] = useState(null)
  const [equipmentSort, setEquipmentSort] = useState(null)
  const [filterExerciseList, setFilterExerciseList] = useState(sortedExerciseList)

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

  const muscleSelection = (e) => {
    muscleSort === e.muscle ? setMuscleSort(null) : setMuscleSort(e.muscle)
  }

  const equipmentSelection = (e) => {
    equipmentSort === e.equipment ? setEquipmentSort(null) : setEquipmentSort(e.equipment)
  }

  useEffect(() => {
    const filteringByEquipment = !!equipmentSort
    const filteringByMuscle = !!muscleSort
    let filteredList = []
    sortedExerciseList.forEach(exercise => {
      if (filteringByEquipment && filteringByMuscle && exercise.muscle === muscleSort && exercise.equipment === equipmentSort) {
        filteredList.push(exercise)
      } else if (filteringByEquipment && !filteringByMuscle && exercise.equipment === equipmentSort) {
        filteredList.push(exercise)
      } else if (filteringByMuscle && !filteringByEquipment && exercise.muscle === muscleSort) {
        filteredList.push(exercise)
      }
    })

    filteredList = filteredList.length === 0 ? sortedExerciseList : filteredList

    setFilterExerciseList(filteredList)
  }, [muscleSort, equipmentSort])

  function handleForm (e) {
    e.preventDefault()
    // conditional statements depending on which page needs exercises added (empty workout, edit template, new template)
    if (originalPageForExercises === 'NewTemplate') {
      setCurrentWorkoutExercises(activeExercises)
      setOriginalPageForExercises('')
      setActivePage('New Template')
      // setCurrentWorkoutExercises([])
    } else if (originalPageForExercises === 'EditTemplate') {
      setCurrentWorkoutExercises(activeExercises)
      setActivePage('Edit Current Template')
      setOriginalPageForExercises('')
    } else {
      setCurrentWorkoutExercises(activeExercises)
      setActivePage('Active Workout')
    }
  }

  return (
    <>
      <div className='sticky top-0 pt-2 z-10 bg-base-100'>
        <div className='flex justify-between content-center'>
          <button className='btn btn-square' onClick={() => handleForm}>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' /></svg>
          </button>
          <h1 className='text-3xl my-2'>Add Exercises</h1>
          <div className='btn' onClick={handleForm}>Add</div>
        </div>
        <div>
          <input type='text' placeholder='Search' className='input input-bordered bg-base-300 my-1 w-full max-w-xs' />
        </div>
        <div className='flex'>
          <details className='dropdown w-full'>
            <summary tabIndex={0} className='btn my-2 w-full'>Muscle</summary>
            <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
              {muscle.map((muscle) => {
                return (
                  <li key={muscle} className={muscle === muscleSort ? 'bg-neutral' : undefined}>
                    <div onClick={() => muscleSelection({ muscle })}>{muscle}</div>
                  </li>
                )
              })}
            </ul>
          </details>
          <details className='dropdown w-full'>
            <summary tabIndex={0} className='btn my-2 w-full'>Equipment</summary>
            <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
              {equipment.map((equipment) => {
                return (
                  <li key={equipment} className={equipment === equipmentSort ? 'bg-neutral' : undefined}>
                    <div onClick={() => equipmentSelection({ equipment })}>{equipment}</div>
                  </li>
                )
              })}
            </ul>
          </details>
        </div>
        <div>
          {muscleSort &&
            <span className='badge'>{muscleSort}</span>}
          {equipmentSort &&
            <span className='badge'>{equipmentSort}</span>}
        </div>
      </div>
      <form onSubmit={handleForm}>

        {filterExerciseList.map((exercise) => {
          return (
            <div className='form-control my-2 grid h-16 card bg-base-300 px-2' key={exercise.name}>
              <label className='label cursor-pointer'>
                <span className='label-text'>{exercise.name}</span>
                <input
                  type='checkbox'
                  className='checkbox'
                  value={exercise.name}
                  checked={activeExercises.includes(exercise.name)}
                  onChange={selectedExercises}
                />
              </label>
            </div>
          )
        })}
        <input type='submit' value='Add Exercises' className='btn btn-primary mt-4 mb-20' />
      </form>
    </>
  )
}
