const router = require('express').Router()
const fs = require('fs')

// Reads JSON file from notes endpoint
router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', (error, data) => {
    if (error) {
      res.status(404).json('Server Error!')
    }
    res.json(JSON.parse(data))
  })
})

module.exports = router