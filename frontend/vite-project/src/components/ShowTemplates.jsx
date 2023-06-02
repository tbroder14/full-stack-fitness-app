import { useState } from "react"

export default function ShowTemplates({setActivePage, setShowButtons, currentTemplate, setCurrentTemplate, allTemplates}) {
    
    function showCurrentTemplate(template) {
        setCurrentTemplate(template)
        setShowButtons(false) 
    }

    function handleClick(buttonText) {
        setCurrentTemplate(currentTemplate)
        setActivePage(buttonText)
    }

    function returnToTemplate() {
        setCurrentTemplate(null)
        setShowButtons(true)
    }

    return(
        <>
            {currentTemplate === null &&
                <>
                    <h2 className="text-4xl text-left mt-5 mb-3">Templates</h2>
                    <div className="flex flex-wrap">
                    {allTemplates.map((template, index) => {
                        return <div key={index} className="w-1/2 mb-2">
                            <div className="card m-1 bg-neutral shadow-xl max-h-44 h-full overflow-hidden py-2 px-3 text-left" key={template.name} onClick={() => showCurrentTemplate(template)}>
                                <div className="font-bold text-center underline">{template.name}</div>
                                <div>
                                    {template.listOfExercises.map((exercise, index) => <span key={index}>{exercise}{index+1 === template.listOfExercises.length ? '' : ','} </span>)}
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                </>
            }
            {currentTemplate && 
                <>
                    <h2 className="text-4xl mt-5 mb-3 underline underline-offset-8 text-center">{currentTemplate.name}</h2>
                    <ul className="list-disc text-left p-6">
                    {currentTemplate.listOfExercises.map((exercise, index) => <li className="list-disc" key={index}>{exercise}</li>)}
                    </ul>
                    <button className={`btn  ${setActivePage === 'Edit Current Template' ? 'active' : ''}`} onClick={() => handleClick('Edit Current Template')}>Edit Template</button>
                    <button className="btn" onClick={() => returnToTemplate()}>Return to Templates</button>
                </>
            }
        </>
    )

}