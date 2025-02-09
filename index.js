import express from "express";
import bodyParser from "body-parser";
import { v4 as UUID } from "uuid";
import { connect as connectToDatabase } from "./db/connection.js";
import { router as staticRouter } from "./router/static-request-router.js"
import { router as mockRouter } from "./router/fetch-and-server.js";
import checkRequestingUser from "./middleware/check-requesting-user.js";

// await connectToDatabase()

const server_submit = express()
const server_mock = express()

server_submit.use(bodyParser.json())
server_submit.use(checkRequestingUser)

server_mock.use(bodyParser.json())

server_submit.get('/test', (request, response) => {
    response.send("Hello")
})

server_submit.use("/static", staticRouter)

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

server_submit.post('/', (request, response) => {
    response.status(200).json({id: UUID()})
})

server_mock.use("/*", mockRouter)


let listening_server_submit = server_submit.listen(3000, () => {
    console.log("Submit server listening on port 3000...")
})

let listening_server_mock = server_mock.listen(3001, () => {
    console.log("Mock server listening on port 3001...")
})