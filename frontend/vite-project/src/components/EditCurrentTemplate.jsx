import { useState } from "react"
import exerciseList from '../data'

export default function EditCurrentTemplate({setActivePage, setShowButtons, allTemplates, setAllTemplates, currentTemplate, setCurrentTemplate}) {
    
    const [activeExercises, setActiveExercises] = useState(currentTemplate.listOfExercises)
    const [templateName, setTemplateName] = useState(currentTemplate.name)        
    const index = allTemplates.indexOf(currentTemplate)

    function returnToCurrentTemplate() {
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

    function deleteCurrentTemplate() {
        if (confirm('Are you sure you want to delete this template?')) {
            const copyOfAllTemplates = [...allTemplates]
            copyOfAllTemplates.splice(index, 1)
            setAllTemplates(copyOfAllTemplates)
            setShowButtons(true)
            setCurrentTemplate(null)
            setActivePage('Show Templates')  
        } 
    }

    function submitButton(e) {
        e.preventDefault() 
        const newTemplate = {
            name: templateName,
            listOfExercises: activeExercises
        }
        const copyOfAllTemplates = [...allTemplates]
        copyOfAllTemplates[index] = newTemplate
        setAllTemplates(copyOfAllTemplates)
        setCurrentTemplate(newTemplate)
        setActivePage('Show Templates')
    }

    return (
        <>
            <h1 className="text-3xl underline underline-offset-8">Update Template</h1>
            
                <form onSubmit={submitButton}>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Template Name</span> 
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    value={templateName}
                                    onChange={updateName} 
                                    placeholder={'Template Name'} 
                                    className="input input-bordered w-full input-lg max-w-xs my-4"
                                    required
                                    
                                />
                            </label>
                        </div>

                        {exerciseList.map(exercise => {
                            return(
                            <div className="form-control" key={exercise.name}>
                                <label className="label cursor-pointer">
                                    <span className="label-text">{exercise.name}</span> 
                                    <input 
                                        type="checkbox" 
                                        className="checkbox" 
                                        value={exercise.name} 
                                        checked={activeExercises.includes(exercise.name)}
                                        onChange={selectedExercises}
                                    />
                                </label>
                            </div>)
                        })}
                       
                        <input type="submit" value="Update Template" className="btn btn-primary my-2"/>
                </form>
            
            <button className="btn my-2" onClick={() => returnToCurrentTemplate()}>Stop Updating Template</button>
            <button className="btn btn-secondary my-2" onClick={() => deleteCurrentTemplate()}>Delete Template</button>
        </>
    )
}