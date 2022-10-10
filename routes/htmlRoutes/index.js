const path = require('path')
const router = require('express').Router()

// Connects to the front page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// Connects to the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

// Sends 404 error if request does not exist
router.get('*', (req, res) => {
  res.send(404)
})


module.exports = router