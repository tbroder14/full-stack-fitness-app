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

// structure data to updated format 
// add reps/sets/weight to templates and empty workout 
// button to create new exercises
// user auth
// create scheme for history/workout page
// create hamburger/three dots = daisyui dropdown 

