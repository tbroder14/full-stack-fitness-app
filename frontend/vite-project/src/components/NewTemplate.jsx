import { useState } from 'react'
// import { muscle, equipment, sortedExerciseList } from '../data';

export default function NewTemplate ({ setActivePage, setShowButtons, setAllTemplates, setOriginalPageForExercises, currentWorkoutExercises, setCurrentWorkoutExercises }) {
  function returnToHomePageButton () {
    setActivePage('Show Templates')
    setShowButtons(true)
    setCurrentWorkoutExercises([])
  }
  const [templateName, setTemplateName] = useState('')
  let selectedExercises = []

  function updateName (e) {
    setTemplateName(e.target.value)
  }

  // function updateSelectedExercises(e) {
  //     if (selectedExercises.includes(e.target.value)) {
  //         selectedExercises = selectedExercises.filter(exercise => exercise !== e.target.value)
  //     } else {
  //         selectedExercises.push(e.target.value)
  //     }
  // }

  function addExercises () {
    setOriginalPageForExercises('NewTemplate')
    setActivePage('Add Exercises')
  }

  function handleForm (e) {
    e.preventDefault()
    const createdTemplate = {
      name: templateName,
      listOfExercises: currentWorkoutExercises
    }
    setAllTemplates(prevState => [...prevState, createdTemplate])
    setTemplateName('')
    selectedExercises = []
    setCurrentWorkoutExercises([])
    returnToHomePageButton()
  }

  return (
    <>
      <div className='flex justify-between content-center'>
        <button className='btn btn-square' onClick={() => returnToHomePageButton()}>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' /></svg>
        </button>
        <h1 className='text-3xl underline-offset-8 self-center'>NEW TEMPLATE</h1>
        <div className='btn btn-primary' onClick={() => handleForm()}>Save</div>
      </div>
      <form onSubmit={handleForm}>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>Template Name</span>
            <input
              type='text'
              name='Name'
              id='Name'
              value={templateName}
              onChange={updateName}
              placeholder='Template Name'
              className='input input-bordered w-full input-lg max-w-xs my-4'
              required
            />
          </label>
        </div>
        {currentWorkoutExercises.map((exercise, index) => {
          return (
            <ul className='list-disc text-left ml-5 my-2' key={index}>
              <li className='list-disc'>{exercise}</li>
            </ul>
          )
        })}

        {/* {exerciseList.map((exercise, index) => {
                        return(
                        <div className="form-control my-2 grid h-14 card bg-base-300 px-2" key={index}>
                            <label className="label cursor-pointer ">
                                <span className="label-text">{exercise.name}</span>
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    value={exercise.name}
                                    onChange={updateSelectedExercises}/>
                            </label>
                        </div>)
                    })} */}
        <input type='submit' value='Save Template' className='btn btn-primary mb-2 mt-4' />
      </form>
      <button className='btn m-2' onClick={() => addExercises()}>Add Exercises</button>
      <button className='btn mt-2 mb-20 btn-secondary' onClick={() => returnToHomePageButton()}>Cancel New Template</button>
    </>
  )
}
