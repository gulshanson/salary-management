const request = require("supertest");
const app = require("../src/app");

describe("Employee API", () => {
  it("should create employee", async () => {
    const res = await request(app).post("/employees").send({
      fullName: "Test User",
      jobTitle: "Engineer",
      country: "India",
      salary: 50000,
    });

    expect(res.statusCode).toBe(201);
  });
});


