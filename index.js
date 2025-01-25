import express from "express";
import bodyParser from "body-parser";
import { v4 as UUID } from "uuid";
import { connect as connectToDatabase } from "./db/connection.js";
import { router as staticRouter } from "./router/static-request-router.js"
import checkRequestingUser from "./middleware/check-requesting-user.js";

await connectToDatabase()

const server = express()
server.use(bodyParser.json())
server.use(checkRequestingUser)

server.get('/test', (request, response) => {
    response.send("Hello")
})

server.use("/static", staticRouter)

// server.post("/data", async (request, response) => {
    
//     const code = request.body.code;

//     const base64Code = Buffer.from(code, 'utf-8').toString('base64')
//     const dataObj = "data:text/javascript;base64," + base64Code

//     const module = await import(dataObj)

//     try {
//         module.process()
//         response.status(200).send("Date received")
//     } catch(error) {
//         response.status(400).send(error.message)
//     }
// })

server.post('/', (request, response) => {
    response.status(200).json({id: UUID()})
})


let listening = server.listen(3000, () => {
    console.log("Server listening on port 3000...")
})