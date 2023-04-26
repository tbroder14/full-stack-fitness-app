const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const { settings } = require('../frontend/vite-project/.eslintrc.cjs')

app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'HELLO'})
})

app.get('/get-exercise-for-day', (req, res) => {
    console.log(req.query.date)
    const data = [
        {
            exerciseName: 'bench Press',
            equipment: 'barbell',
        },
        {
            exerciseName: 'RDL',
            equipment: 'dumbbells'
        }
    ]    
    setTimeout(() => {
        res.send(data)
    }, 3000)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})