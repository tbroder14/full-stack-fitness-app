import { useState, useEffect } from 'react'
import { muscle, equipment, sortedExerciseList } from '../data'

export default function Exercises () {
  const [muscleSort, setMuscleSort] = useState(null)
  const [equipmentSort, setEquipmentSort] = useState(null)
  const [filterExerciseList, setFilterExerciseList] = useState(sortedExerciseList)
  const [searchBarInput, setSearchBarInput] = useState('')

  const muscleSelection = (e) => {
    muscleSort === e.muscle ? setMuscleSort(null) : setMuscleSort(e.muscle)
  }

  const equipmentSelection = (e) => {
    equipmentSort === e.equipment ? setEquipmentSort(null) : setEquipmentSort(e.equipment)
  }

  const searchField = (e) => {
    setSearchBarInput(e.target.value)
  }

  useEffect(() => {
    let filteredList = sortedExerciseList

    if (equipmentSort) {
      filteredList = filteredList.filter((exercise) => exercise.equipment === equipmentSort)
    }

    if (muscleSort) {
      filteredList = filteredList.filter((exercise) => exercise.muscle === muscleSort)
    }

    if (searchBarInput !== '') {
      const searchInputLowerCase = searchBarInput.toLowerCase()
      filteredList = filteredList.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchInputLowerCase)
      )
    }

    setFilterExerciseList(filteredList)
  }, [equipmentSort, muscleSort, searchBarInput, sortedExerciseList])

  function exerciseClick (event, exercise) {
    event.preventDefault()
    console.log(exercise + ' would be displayed')
  }

  return (
    <>
      <div className='flex text-4xl text-center mt-5 mb-3 tracking-wide justify-center items-center'>Exercise Page</div>
      <div className='sticky top-0 pt-2 z-10 bg-base-100'>
        <div className='flex justify-between content-center' />
        <div>
          <input type='text' placeholder='Search' className='input input-bordered bg-base-300 my-1 w-full max-w-xs' value={searchBarInput} onChange={searchField} />
        </div>
        <div className='flex'>
          <details className='dropdown w-full'>
            <summary tabIndex={0} className='btn my-2 w-full'>Muscle</summary>
            <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
              {muscle.map((muscle) => {
                return (
                  <li key={muscle} className={muscle === muscleSort ? 'bg-neutral' : undefined}>
                    <a onClick={() => muscleSelection({ muscle })}>{muscle}</a>
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
                    <a onClick={() => equipmentSelection({ equipment })}>{equipment}</a>
                  </li>
                )
              })}
            </ul>
          </details>
        </div>
        <div>
          {muscleSort &&
            <span className='badge mx-2 my-1'>{muscleSort}</span>}
          {equipmentSort &&
            <span className='badge'>{equipmentSort}</span>}
        </div>
      </div>
      <form>
        {filterExerciseList.length === 0 ? (
          <div className='mt-4 text-lg'>No exercise matches your search criteria.</div>
        ) : (
        filterExerciseList.map((exercise, index) => {
          return (
            <div className='my-2 grid h-16 card bg-base-300 px-2' key={index}>
              <label className='label cursor-pointer'>
                <button className='label-text' onClick={() => exerciseClick(exercise.name)}>{exercise.name}</button>
                {/* <input
                                // type="checkbox"
                                // className="checkbox"
                                value={exercise.name}
                                // checked={activeExercises.includes(exercise.name)}
                                // onChange={selectedExercises}
                            /> */}
              </label>
            </div>
          )
        }))}
        {/* <input type="submit" value="Add Exercises" className="btn btn-primary mt-4 mb-20"/> */}
      </form>
    </>
  )
}
