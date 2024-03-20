const express = require("express")
const app = express()
const port = 3002

const data = [
  {
    id: 3,
    name: "Foo"
  },
  {
    id: 4,
    name: "Bar"
  }
]

app.get('/users', async (req, res) => {
  const response = await data
  res.send(data)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
