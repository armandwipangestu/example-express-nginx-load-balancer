const express = require("express")
const app = express()
const port = 3001

const data = [
  {
    id: 1,
    name: "John Doe"
  },
  {
    id: 2,
    name: "Jane Doe"
  }
]

app.get('/users', async (req, res) => {
  const response = await data
  res.send(data)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
