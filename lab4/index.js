const express = require("express");
const employee = require("./models/employees");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


const router = express.Router();

router.post("/signup", async (req, res) => {
    const { email, password } = req.body

    let employee = await employee.findOne({ email })
    if (employee) return res.status(400).send("email already existed")

    const encryptedPass = await bcrypt.hash(password, 12)

    employee = await new employee({ email, password: encryptedPass }).save();

    res.json({ _id: employee._id, email: employee.email })
})

router.post("/signin", async (req, res) => {
    const { email, password } = req.body

    let employee = await employee.findOne({ email })
    if (!employee) return res.status(400).send("wrong email or password")

    const isValidPass = await bcrypt.compare(password, employee.password)
    if (!isValidPass) return res.status(400).send("wrong email or password")

    const token = jwt.sign({
        email, isAdmin: false
    }, "secretkey")

    res.json({token})
})

module.exports = router