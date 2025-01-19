import express from "express";
import bodyParser from "body-parser";
import { v4 as UUID } from "uuid";
import checkRequestingUser from "./middleware/check-requesting-user.js";

const server = express()
server.use(bodyParser.json())
server.use(checkRequestingUser)

server.get('/', (request, response) => {
    response.send("Hello")
})

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