const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World! - welcome to icu program -greens')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
