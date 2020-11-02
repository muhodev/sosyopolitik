const express = require("express")
const app = express()

const PORT = process.env.APP_PORT || 4000

app.use(express.json())

app.get("/", (req, res, next) => {
    res
        .status(200)
        .json({
            status: "success",
            data: {
                msg: "Hello world"
            }
        })
})

app.listen(PORT, (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log(`Server is running on ${PORT} port.`)

})