const express = require("express")
const app = express()
const port = 4002

const data = [
  {
    id: 3,
    name: "Headshet"
  },
  {
    id: 4,
    name: "Monitor"
  }
]

app.get('/products', async (req, res) => {
  const response = await data
  res.send(data)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
