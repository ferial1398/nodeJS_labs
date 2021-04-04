const express = require("express");
const employee = require("../models/employee")

const router = express.Router();

router.get("/add", (req, res) => {
    res.render("add-employee", { title: "Add employee" })
})

router.post("/add", async (req, res) => {
    await employee.add(req.body);
    res.redirect("/employees/view")
})

router.get("/view", async (req, res) => {
    const employees = await employee.getAll();
    res.render("view-employees", { title: "View employees", employees })
})

router.get("/del/:id", async (req, res) => {
    await employee.remove(req.params.id)
    res.redirect("/employees/view")
})

router.get("/edit/:id", async (req, res) => {
    const employee = await employee.getOne(req.params.id)
    res.render("edit-employee", { title: "Edit employees", employee })
})

router.post("/edit/:id", async (req, res) => {
    console.log("edit");
    console.log(req.body);
    await employee.edit(req.params.id, req.body)
    res.redirect("/employees/view")
})


module.exports = router