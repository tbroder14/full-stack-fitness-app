export default function StartWorkoutButton({setActivePage, setShowButtons}) {
    
    function returnToHomePageButton() {
        setActivePage('Edit Template')
        setShowButtons(true)
    }    


    return (
        <>
            <h1 className="text-4xl">Start Empty Workout</h1>

            
            <h1>This would be a new workout</h1>

            <button className="btn" onClick={() => returnToHomePageButton()}>Cancel Empty Workout</button>

        </>
    )
}