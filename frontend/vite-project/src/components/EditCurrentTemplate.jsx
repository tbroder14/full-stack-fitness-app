import { useState } from "react"
import { exerciseList } from '../data'

export default function EditCurrentTemplate({setActivePage, setShowButtons, setAllTemplates, currentTemplate, setCurrentTemplate}) {
    function returnToHomePageButton() {
        setActivePage('Show Templates')
        setShowButtons(false)
    }
    
    const [templateName, setTemplateName] = useState({name: currentTemplate.name})

    const updateName = (e) => {
        console.log(e.target.value)
        setTemplateName(({templateName, [e.target.name]: e.target.value }))
    }

    function selectedExercises(e) {
        // console.log(e)
        // if (selectedExercises.includes(e.target.value)) {
        //     selectedExercises = selectedExercises.filter(exercise => exercise !== e.target.value)
        // } else {
        //     selectedExercises.push(e.target.value)
        // }
    }
    
    function handleForm(e) {
        e.preventDefault() 
        
        const createdTemplate = {
            name: templateName.name,
            listOfExercises: selectedExercises
        }
        console.log(createdTemplate)
        
        // setAllTemplates(prevState => [...prevState, createdTemplate])
        // setTemplateName('')
        // selectedExercises = []
        
        returnToHomePageButton()
    }

    return (
        <>
            <h1 className="text-3xl underline underline-offset-8">Update Template</h1>
            
                <form onSubmit={handleForm}>
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
                                        onChange={() => selectedExercises}
                                    />
                                </label>
                            </div>)
                        })}
                       
                        <input type="submit" value="Update Template" className="btn btn-primary my-4"/>
                </form>
            
           <button className="btn my-4" onClick={() => returnToHomePageButton()}>Stop Updating Template</button>
        </>
    )
}