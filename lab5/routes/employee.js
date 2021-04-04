const express = require("express");
const employee = require("../models/employees");

const router = express.Router();

router.get("/", async (req, res) => {

  employees = await employee.getemployees();
  res.send(employees);
});

module.exports = router