// const muscle = ['hamstrings', 'quadriceps', 'biceps', 'triceps', 'glutes', 'chest', 'core', 'quadriceps', 'back', 'calves']
// const equipment = ['barbell', 'dumbbell', 'cable', 'kettlebell', 'bodyweight', 'machine', 'other']
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

export default exerciseList.sort((a, b) => a.name.localeCompare(b.name))


//              start workout tab
// add notes to workout 
// fix "add exercises" button on "edit template" page 
// get muscle/equipment dropdowns to work properly 
// get search bar to work
// fix sticky top (if possible on desktop)
// format data for when workout is saved//in a format that can be used for the history page 
// create hamburger/three dots on templates to edit template = daisyui dropdown 

//              exercises page 
// map over exercise list for exercises page 
// when exercise is clicked, pop up new page for specific exercise 

//              history page
// express netlify video 
// user auth


