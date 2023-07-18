import { muscle, equipment, sortedExerciseList } from '../data';

export default function Exercises() {
    
    function muscleSort(event) {
        event.preventDefault();

        console.log('muscle click for search')
    }

    function equipmentSort(event) {
        event.preventDefault();

        console.log('equipment click for search')
    }

    function muscleClick(event) {
        event.preventDefault();

        console.log('muscle click')
    }
    
    return(
        <> 
            <div className="flex text-4xl text-center mt-5 mb-3 tracking-wide justify-center items-center">Exercise Page</div>
            <div className="sticky top-0 pt-2 z-10 bg-base-100">
                <div className="flex justify-between content-center">
                </div>
                <div>
                    <input type="text" placeholder="Search" className="input input-bordered bg-base-300 my-1 w-full max-w-xs" />
                </div>
                <div className="flex">
                    <details className="dropdown w-full">
                        <summary tabIndex={0} className="btn my-2 w-full">Muscle</summary>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {muscle.map((muscle) => {
                                return (
                                    <li><a onClick={(event) => muscleSort(event)}>{muscle}</a></li>
                                )
                            })}
                        </ul>
                    </details>
                    <details className="dropdown w-full">
                        <summary tabIndex={0} className="btn my-2 w-full">Equipment</summary>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {equipment.map((equipment) => {
                                return (
                                    <li><a onClick={(event) => muscleSort(event)}>{equipment}</a></li>
                                )
                            })}
                        </ul>
                    </details>
                </div>
            </div>
            <form>
                              
                {sortedExerciseList.map((exercise, index) => {
                    return(
                    <div className="my-2 grid h-16 card bg-base-300 px-2" key={index}>
                        <label className="label cursor-pointer">
                            <button className="label-text" onClick={(event) => muscleClick(event)}>{exercise.name}</button> 
                            {/* <input 
                                // type="checkbox" 
                                // className="checkbox" 
                                value={exercise.name} 
                                // checked={activeExercises.includes(exercise.name)}
                                // onChange={selectedExercises}
                            /> */}
                        </label>
                    </div>)
                })}
                {/* <input type="submit" value="Add Exercises" className="btn btn-primary mt-4 mb-20"/> */}
            </form> 
        </>
    )

}
