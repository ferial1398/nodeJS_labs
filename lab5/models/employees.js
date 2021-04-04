const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const employee = mongoose.model("employee", employeeSchema);

const createemployee = (employee) => {
  
  return new employee(employee).save();
};

const getemployees = () => {
  return employee.find();
};

const getOneemployee = (id) => {
  return employee.findById(id);
};

const deleteemployee = (_id) => {
  return employee.deleteOne({ _id });
};

const editemployee = (_id, editedemployee) => {
  return employee.updateOne({ _id }, editedemployee);
};

module.exports = {
  createemployee,
  getemployees,
  getOneemployee,
  editemployee,
  deleteemployee,
};
