import Exercises from "./Exercises"

export default function StartWorkout() {
    const templateOne = {
        name: 'Template One',
        listOfExercises: [
            'barbell bench press','barbell RDL', 'barbell back squat'
        ]
    }

    const templateTwo = {
        name: 'Template Two',
        listOfExercises: [
            'dumbbell bench press','dumbbell RDL', 'dumbbell back squat'
        ]
    }
    
    const templateThree= {
        name: 'Template Three',
        listOfExercises: [
            'dumbbell bench press','dumbbell RDL', 'dumbbell back squat'
        ]
    }
    const allTemplates = [templateOne, templateTwo, templateThree]

    return(
        <>
            <h1 className="text-5xl">Workout page!</h1>
            <h2 className="text-2xl text-left mt-5 mb-3">Templates</h2>
            <div className="flex flex-wrap">
                {allTemplates.map(template => {
                    return <div className="w-1/2 mb-2">
                        <div className="rounded-2xl	m-1 bg-neutral shadow-xl max-h-44 h-full overflow-hidden p-3 text-left" key={template.name}>
                            <div className="font-bold text-center underline">{template.name}</div>
                            <div>
                                {template.listOfExercises.map((exercise, index) => <span key={exercise}>{exercise}{index+1 === template.listOfExercises.length ? '' : ','} </span>)}
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <button className="btn my-6">New Template</button>
            <button className="btn ">Start Empty Workout</button>

        </>
    )

}
