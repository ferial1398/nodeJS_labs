exports.getemployees = async (req, res) => {
    const employees = await employee.getAll()
    res.json(employees)
}