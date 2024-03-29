import { useState } from 'react'
// import { muscle, equipment, sortedExerciseList } from '../data';

export default function EditCurrentTemplate ({ setActivePage, setShowButtons, allTemplates, setAllTemplates, currentTemplate, setCurrentTemplate, currentWorkoutExercises, setOriginalPageForExercises, setCurrentWorkoutExercises }) {
  setCurrentWorkoutExercises(currentTemplate.listOfExercises)
  const [activeExercises, setActiveExercises] = useState(currentTemplate.listOfExercises)
  const [templateName, setTemplateName] = useState(currentTemplate.name)
  const index = allTemplates.indexOf(currentTemplate)

  function returnToCurrentTemplate () {
    setShowButtons(false)
    setActivePage('Show Templates')
  }

  const updateName = (e) => {
    setTemplateName(e.target.value)
  }

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

  function deleteCurrentTemplate () {
    if (confirm('Are you sure you want to delete this template?')) {
      const copyOfAllTemplates = [...allTemplates]
      copyOfAllTemplates.splice(index, 1)
      setAllTemplates(copyOfAllTemplates)
      setShowButtons(true)
      setCurrentTemplate(null)
      setActivePage('Show Templates')
    }
  }

  function addExercises () {
    setOriginalPageForExercises('EditTemplate')
    setActivePage('Add Exercises')
  }

  function submitButton (e) {
    e.preventDefault()

    const newTemplate = {
      name: templateName,
      listOfExercises: currentWorkoutExercises
    }
    const copyOfAllTemplates = [...allTemplates]
    copyOfAllTemplates[index] = newTemplate
    setAllTemplates(copyOfAllTemplates)
    setCurrentTemplate(newTemplate)
    setCurrentWorkoutExercises([])
    setActivePage('Show Templates')
  }

  return (
    <>
      <h1 className='text-3xl underline underline-offset-8'>Update Template</h1>

      <form onSubmit={submitButton}>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>Template Name</span>
            <input
              type='text'
              name='name'
              id='name'
              value={templateName}
              onChange={updateName}
              placeholder='Template Name'
              className='input input-bordered w-full input-lg max-w-xs my-4'
              required
            />
          </label>
        </div>

        {activeExercises.map((exercise, index) => {
          return (
            <ul className='list-disc text-left ml-5 my-2' key={index}>
              <li className='list-disc' onChange={selectedExercises}>{exercise}</li>
            </ul>
          )
        })}

        <button className='btn m-2' onClick={addExercises}>Add Exercises</button>

        <input type='submit' value='Update Template' className='btn btn-primary my-2' />
      </form>

      <button className='btn my-2' onClick={() => returnToCurrentTemplate()}>Stop Updating Template</button>
      <button className='btn btn-secondary mt-2 mb-20' onClick={() => deleteCurrentTemplate()}>Delete Template</button>
    </>
  )
}
