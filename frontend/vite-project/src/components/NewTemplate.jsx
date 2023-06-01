import { useState } from "react"
import { exerciseList } from '../data'

export default function NewTemplate({setActivePage, setShowButtons, setAllTemplates}) {
    function returnToHomePageButton() {
        setActivePage('Show Templates')
        setShowButtons(true)
    }
    const [templateName, setTemplateName] = useState('')
    let selectedExercises = []
   
    function updateName(e) {
        setTemplateName(e.target.value)
    }

    function updateSelectedExercises(e) {
        if (selectedExercises.includes(e.target.value)) {
            selectedExercises = selectedExercises.filter(exercise => exercise !== e.target.value)
        } else {
            selectedExercises.push(e.target.value)
        }
    }

    function handleForm(e) {
        e.preventDefault() 
        const createdTemplate = {
            name: templateName,
            listOfExercises: selectedExercises
        }
        setAllTemplates(prevState => [...prevState, createdTemplate])
        setTemplateName('')
        selectedExercises = []
        returnToHomePageButton()
    }

    return (
        <>
            <h1 className="text-3xl underline underline-offset-8">Create a New Template</h1>
            
                <form onSubmit={handleForm}>
                        <div className="form-control" key={templateName}>
                            <label className="label cursor-pointer">
                                <span className="label-text">Template Name</span> 
                                <input 
                                    type="text" 
                                    name="Name" 
                                    id="Name" 
                                    value={templateName} 
                                    onChange={updateName} 
                                    placeholder="Template Name" 
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
                                    <input type="checkbox" className="checkbox" value={exercise} onChange={updateSelectedExercises}/>
                                </label>
                            </div>)
                        })}
                       
                        <input type="submit" value="Save Template" className="btn btn-primary my-4"/>
                </form>
            
           <button className="btn my-4" onClick={() => returnToHomePageButton()}>Cancel New Template</button>
        </>
    )
}