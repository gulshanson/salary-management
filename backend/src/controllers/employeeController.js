const service = require("../services/employeeService");

exports.createEmployee = async (req, res) => {
  const employee = await service.create(req.body);
  res.status(201).json(employee);
};

exports.getEmployees = async (req, res) => {
  const data = await service.getAll();
  res.json(data);
};

exports.updateEmployee = async (req, res) => {
  const updated = await service.update(req.params.id, req.body);
  res.json(updated);
};

exports.deleteEmployee = async (req, res) => {
  await service.remove(req.params.id);
  res.json({ message: "Deleted" });
};
