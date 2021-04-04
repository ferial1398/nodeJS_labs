const express = require("express");

const employee = require("../models/employee")
const employeeController = require("../controller/employee")

const router = express.Router();

router.get("/", employeeController.getemployees)

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const employee = await employee.getOne(id)
        if (!employee) return res.status(404).json({ err: "There is no data with this id " })
        res.json(employee);
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})

router.post("/", async (req, res) => {
    const { error } = employee.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)
    const employee = await employee.add(req.body)
    res.json(employee)
})

router.put("/:id", async (req, res) => {
    const { error } = employee.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)
    try {
        const employee = await employee.edit(req.params.id, req.body)
        res.json(employee)
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const employee = await User.remove(req.params.id)
        res.json(employee)
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})


module.exports = router
