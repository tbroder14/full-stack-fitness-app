const muscleEnums = {
  barbell: 'barbells',
  dumbbells: 'dumbbells'
}
const muscle = ['hamstrings', 'quadriceps', 'biceps', 'triceps', 'glutes', 'chest', 'core', 'back', 'calves']
const equipment = [muscleEnums.barbell, muscleEnums.dumbbells, 'cable', 'kettlebell', 'bodyweight', 'machine', 'other']
const exerciseList = [
  {
    name: 'Squat (Barbell)',
    muscle: 'quadriceps',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Deadlift (Barbell)',
    muscle: 'hamstrings',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Romanian Deadlift (Barbell)',
    muscle: 'hamstrings',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Good Morning (Barbell)',
    muscle: 'hamstrings',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Romanian Deadlift (Dumbbells)',
    muscle: 'hamstrings',
    equipment: muscleEnums.dumbbells
  },
  {
    name: 'Deadlift (Dumbbells)',
    muscle: 'hamstrings',
    equipment: muscleEnums.dumbbells
  },
  {
    name: 'Bicep Curl (Barbell)',
    muscle: 'bicep',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Bench Press (Barbell)',
    muscle: 'chest',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Hip Thrust (Barbell)',
    muscle: 'glutes',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Overhead Shoulder Press (Barbell)',
    muscle: 'shoulders',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Front Squat (Barbell)',
    muscle: 'quadriceps',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Bicep (Barbell)',
    muscle: 'biceps',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Lat Pulldown (Cable)',
    muscle: 'back',
    equipment: 'cable'
  },
  {
    name: 'Bulgarian Split Squat (Barbell)',
    muscle: 'quadriceps',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Box Squat (Barbell)',
    muscle: 'quadriceps',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Reverse Lunge (Barbell)',
    muscle: 'quadriceps',
    equipment: muscleEnums.barbell
  },
  {
    name: 'Bench Press (Dumbbells)',
    muscle: 'chest',
    equipment: muscleEnums.dumbbells
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

const sortedExerciseList = exerciseList.sort((a, b) => a.name.localeCompare(b.name))

export { muscle, equipment, sortedExerciseList }

//              start workout tab
// add notes to particular exercise
// delete particular set (might be exclusive to iPhone app because of swiping motion)

// fix "add exercises" button on "edit template" page

// if a muscle/equipment has no exercises, display something that says "no exercises exist for these options"
// get search bar to work

// format data for when workout is saved//in a format that can be used for the history page
// format "onchange" on activeworkout page to work, inputted values aren't erased when vising "add exercise page"
// create hamburger/three dots on templates to edit template = daisyui dropdown
// fix sticky top (if possible on desktop)

//              exercises page
// when exercise is clicked, pop up new page for specific exercise

//              history page
// express netlify video
// user auth
