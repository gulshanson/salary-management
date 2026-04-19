const router = require("express").Router();
const prisma = require("@prisma/client").PrismaClient;
const db = new prisma();

router.get("/", async (req, res) => {
  const { country } = req.query;

  const stats = await db.employee.groupBy({
    by: ["country"],
    _min: { salary: true },
    _max: { salary: true },
    _avg: { salary: true },
  });

  res.json(stats);
});

module.exports = router;
