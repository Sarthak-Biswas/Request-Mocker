import express from "express";
import { v4 as UUID } from "uuid";
import { Mocker } from "../db/model/Mocker.js";

const router = express.Router({
    caseSensitive: true
})

router.get("/ping", (req, res) => {
    const response = {
        ping: "pong"
    }
    res.status(200).json(response)
})

router.post("/createMockRequest", async (req, res) => {
    const payload = req.body
    try {
        console.log({"response": payload.data})
        const entry = await Mocker.create({
            id: UUID(),
            uri: payload.uri,
            method: payload.method,
            mockerType: 'STATIC',
            mockerData: {
                "response": payload.data
            }
        })
        res.status(201).json(entry)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

export { router }