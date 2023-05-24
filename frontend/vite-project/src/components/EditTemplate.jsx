import { useState } from "react"

export default function EditTemplate({setShowButtons, allTemplates}) {

    const [currentTemplate, setCurrentTemplate] = useState(null)

    function editCurrentTemplate(template) {
        setCurrentTemplate(template)
        setShowButtons(false) 
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
                    {allTemplates.map(template => {
                        return <div className="w-1/2 mb-2">
                            <div className="card m-1 bg-neutral shadow-xl max-h-44 h-full overflow-hidden py-2 px-3 text-left" key={template.name} onClick={() => editCurrentTemplate(template)}>
                                <div className="font-bold text-center underline">{template.name}</div>
                                <div>
                                    {template.listOfExercises.map((exercise, index) => <span key={exercise}>{exercise}{index+1 === template.listOfExercises.length ? '' : ','} </span>)}
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                </>
            }

            {currentTemplate && 
                <>
                    <h2 className="text-4xl text-left mt-5 mb-3">{currentTemplate.name}</h2>

                    <button className="btn" onClick={() => returnToTemplate()}>Return to Templates</button>
                </>
            }
        </>
    )

}