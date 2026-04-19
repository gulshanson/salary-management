const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const firstNames = ["John", "Jane", "Alex", "Chris"];
const lastNames = ["Smith", "Doe", "Brown", "Lee"];
const countries = ["India", "USA", "UK"];
const roles = ["Engineer", "Manager", "HR"];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function main() {
  const data = [];

  for (let i = 0; i < 10000; i++) {
    data.push({
      fullName: `${random(firstNames)} ${random(lastNames)}`,
      jobTitle: random(roles),
      country: random(countries),
      salary: Math.floor(Math.random() * 100000),
    });
  }

  await prisma.employee.createMany({ data });
}

main();
