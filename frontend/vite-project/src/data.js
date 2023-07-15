const muscle = ['hamstrings', 'quadriceps', 'biceps', 'triceps', 'glutes', 'chest', 'core', 'quadriceps', 'back', 'calves']
const equipment = ['barbell', 'dumbbell', 'cable', 'kettlebell', 'bodyweight', 'machine', 'other']
const exerciseList = [
    {
        name: 'Squat (Barbell)',
        muscle: 'quadriceps',
        equipment: 'barbell'
    },
    {
        name: 'Deadlift (Barbell)',
        muscle: 'hamstrings',
        equipment: 'barbell'
    },
    {
        name: 'Romanian Deadlift (Barbell)',
        muscle: 'hamstrings',
        equipment: 'barbell'
    },
    {
        name: 'Good Morning (Barbell)',
        muscle: 'hamstrings',
        equipment: 'barbell'
    },
    {
        name: 'Romanian Deadlift (Dumbbells)',
        muscle: 'hamstrings',
        equipment: 'dumbbells'
    },
    {
        name: 'Deadlift (Dumbbells)',
        muscle: 'hamstrings',
        equipment: 'dumbbells'
    },
    {
        name: 'Bicep Curl (Barbell)',
        muscle: 'bicep',
        equipment: 'barbell'
    },
    {
        name: 'Bench Press (Barbell)',
        muscle: 'chest',
        equipment: 'barbell'
    },
    {
        name: 'Hip Thrust (Barbell)',
        muscle: 'glutes',
        equipment: 'barbell'
    },
    {
        name: 'Overhead Shoulder Press (Barbell)',
        muscle: 'shoulders',
        equipment: 'barbell'
    },
    {
        name: 'Front Squat (Barbell)',
        muscle: 'quadriceps',
        equipment: 'barbell'
    },
    {
        name: 'Lat Pulldown (Cable)',
        muscle: 'back',
        equipment: 'cable'
    },
    {
        name: 'Bulgarian Split Squat (Barbell)',
        muscle: 'quadriceps',
        equipment: 'barbell'
    },
    {
        name: 'Box Squat (Barbell)',
        muscle: 'quadriceps',
        equipment: 'barbell'
    },
    {
        name: 'Reverse Lunge (Barbell)',
        muscle: 'quadriceps',
        equipment: 'barbell'
    },
    {
        name: 'Bench Press (Dumbbells)',
        muscle: 'chest',
        equipment: 'dumbbells'
    },
    {
        name: 'Seated Leg Curl (Machine)',
        muscle: 'hamstrings',
        equipment: 'Machine'
    },
    {
        name: 'Back Extension',
        muscle: 'back',
        equipment: 'other'
    },
    {
        name: 'Push-ups',
        muscle: 'chest',
        equipment: 'bodyweight'
    }
]

const sortedExerciseList = exerciseList.sort((a, b) => a.name.localeCompare(b.name));

export { muscle, equipment, sortedExerciseList };


//              start workout tab
// add notes to particular exercise 
// delete particular set (might be exclusive to iPhone app because of swiping motion)

// fix "add exercises" button on "edit template" page 

// with muscle/equipment dropdowns on "add exercise" page, display exercise with selected option 
// get search bar to work

// format data for when workout is saved//in a format that can be used for the history page 
// format "onchange" on activeworkout page to work, inputted values aren't erased when vising "add exercise page"
// create hamburger/three dots on templates to edit template = daisyui dropdown 
// fix sticky top (if possible on desktop)


//              exercises page 
// map over exercise list for exercises page 
// when exercise is clicked, pop up new page for specific exercise 

//              history page
// express netlify video 
// user auth


