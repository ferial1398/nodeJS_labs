const mongoose = require("mongoose");
const Joi = require("joi");

const mongooseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
})

const joiSchema = Joi.object({
    name : Joi.string().alphanum().min(3).max(20).required(),
    phone: Joi.number().min(10).max(12).required(),
    address : Joi.string().min(3).max(20).required()
})

const employee = mongoose.model("employee", mongooseSchema);

exports.add = (employee) => new employee(employee).save();
exports.getAll = () => employee.find();
exports.getOne = (id) => employee.findById(id);
exports.edit = (id, employee) => employee.findByIdAndUpdate(id, employee);
exports.remove = (_id) => employee.findOneAndDelete({_id});

exports.validate = (employee)=> joiSchema.validate(employee);