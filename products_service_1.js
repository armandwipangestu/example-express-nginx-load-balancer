const express = require("express")
const app = express()
const port = 4001

const data = [
  {
    id: 1,
    name: "Keyboard"
  },
  {
    id: 2,
    name: "Mouse"
  }
]

app.get('/products', async (req, res) => {
  const response = await data
  res.send(data)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
