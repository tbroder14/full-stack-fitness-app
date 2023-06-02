import { useState, useEffect } from "react"
import { exerciseList } from '../data'

export default function EditCurrentTemplate({setActivePage, setShowButtons, allTemplates, setAllTemplates, currentTemplate, setCurrentTemplate}) {
    
    const [index, setIndex] = useState(allTemplates.indexOf(currentTemplate))
    const [templateName, setTemplateName] = useState({name: currentTemplate.name})
    let tempAllTemplates
    let tempCurrentTemplate

    useEffect(() => { 
        tempAllTemplates = allTemplates
        tempCurrentTemplate = tempAllTemplates[index]
    }, []); 

    function returnToCurrentTemplate() {
        setCurrentTemplate(tempCurrentTemplate) 
        setShowButtons(false)
        setActivePage('Show Templates')     
    }
    
    const updateName = (e) => {
        setTemplateName(({templateName, [e.target.name]: e.target.value }))
    }

    const selectedExercises = (e) => {
        if (currentTemplate.listOfExercises.includes(e.target.value)) {
            currentTemplate.listOfExercises = currentTemplate.listOfExercises.filter((exercise) => e.target.value !== exercise)
        } else {
            currentTemplate.listOfExercises.push(e.target.value)
        }
        const updatedTemplate = {
            name: currentTemplate.name,
            listOfExercises: currentTemplate.listOfExercises
        }
        // setting state to rerender page, so checkboxes work 
        setCurrentTemplate(updatedTemplate)
    }

    function submitButton(e) {
        e.preventDefault() 
        // update respective template in allTemplates

        tempCurrentTemplate = currentTemplate
        tempAllTemplates[index] = tempCurrentTemplate
        setAllTemplates(tempAllTemplates)
        returnToHomePageButton()
    }

    return (
        <>
            <h1 className="text-3xl underline underline-offset-8">Update Template</h1>
            
                <form onSubmit={submitButton}>
                        <div className="form-control" key={templateName}>
                            <label className="label cursor-pointer">
                                <span className="label-text">Template Name</span> 
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    value={templateName.name} 
                                    onChange={updateName} 
                                    placeholder={'Template Name'} 
                                    className="input input-bordered w-full input-lg max-w-xs my-4"
                                    required
                                    
                                />
                            </label>
                        </div>

                        {exerciseList.map(exercise => {
                            return(
                            <div className="form-control" key={exercise}>
                                <label className="label cursor-pointer">
                                    <span className="label-text">{exercise}</span> 
                                    <input 
                                        type="checkbox" 
                                        className="checkbox" 
                                        value={exercise} 
                                        checked={currentTemplate.listOfExercises.includes(exercise)}
                                        onChange={selectedExercises}
                                    />
                                </label>
                            </div>)
                        })}
                       
                        <input type="submit" value="Update Template" className="btn btn-primary my-4"/>
                </form>
            
           <button className="btn my-4" onClick={() => returnToCurrentTemplate()}>Stop Updating Template</button>
        </>
    )
}