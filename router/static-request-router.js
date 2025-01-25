import express from "express";

const router = express.Router({
    caseSensitive: true
})

router.get("/ping", (req, res) => {
    const response = {
        ping: "pong"
    }
    res.status(200).json(response)
})

router.post("/createMockRequest", (req, res) => {
    
})

export { router }