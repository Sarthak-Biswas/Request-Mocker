import express from "express";
import { Mocker } from "../db/model/Mocker.js";

const router = express.Router({
    caseSensitive: true
})

router.all("/*", async (req, res) => {
    try {
        // const mockData = await Mocker.findByPk([req.path, req.method])

        // if (mockData === null) {
        //     res.status(404).json({"message": "Mocked URI or Method not found."})
        // } else {
        //     res.status(200).json(mockData.mockerData.response)
        // }
        console.log(req.b)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

export { router }