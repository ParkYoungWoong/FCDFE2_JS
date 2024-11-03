const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('.'))
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.listen(3000, () => {
  console.log('Server is running!')
})