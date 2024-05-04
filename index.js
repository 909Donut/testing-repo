import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.status(200).send("<h1>This is an express project. This is another line.</h1>")
})

app.listen(3000, () => {
    console.log('App running on port 3000');
})