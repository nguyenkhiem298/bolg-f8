const express = require('express')
var morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
//   res.send('Hello World!')
    res.send(`
    <h1>Day la chuong trinh nodejs dau tien</h1>
    `);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})