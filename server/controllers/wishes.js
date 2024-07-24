// Using 'Prisma'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.index = async (req, res) => {
  await prisma.guestWishes
    .findMany({
      orderBy: {
        id: "desc",
      },
    })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      return res.json("Something's Wrong...", err);
    });
};

module.exports.addWishes = async (req, res) => {
  const { name, address, wishes } = req.body;

  await prisma.guestWishes
    .create({
      data: {
        name,
        address,
        wishes,
      },
    })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      return res.status(res.statusCode).json("Failed Add Wishes:", err);
    });
};

// Using 'mysql2'
// const { db } = require("../utils/dbConnect");

// module.exports.index = (req, res) => {
//   const que = "SELECT * FROM guest_wishes ORDER BY id DESC";
//   db.query(que, (err, data) => {
//     if (err) return res.json("Something's Wrong...", err);
//     return res.json(data);
//   });
// };

// module.exports.addWishes = (req, res) => {
//   const { name, address, wishes } = req.body;
//   const que =
//     "INSERT INTO guest_wishes (`name`, `address`, `wishes`) VALUES (?)";
//   const values = [name, address, wishes];
//   db.query(que, [values], (err, data) => {
//     if (err) return res.status(res.statusCode).json("Failed Add Wishes:", err);
//     return res.json(data);
//   });
// };
