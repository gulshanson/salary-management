const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.create = (data) => prisma.employee.create({ data });

exports.getAll = () => prisma.employee.findMany();

exports.update = (id, data) =>
  prisma.employee.update({
    where: { id: Number(id) },
    data,
  });

exports.remove = (id) =>
  prisma.employee.delete({
    where: { id: Number(id) },
  });
