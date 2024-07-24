const { db } = require("../utils/dbConnect");

module.exports.index = (req, res) => {
  const que = "SELECT * FROM guest_wishes ORDER BY id DESC";
  db.query(que, (err, data) => {
    if (err) return res.json("Something's Wrong...", err);
    return res.render("admin/wishes", { data });
  });
};

module.exports.deleteWishes = (req, res) => {
  const { id } = req.params;
  const que = "DELETE FROM guest_wishes WHERE id = ?";
  db.query(que, [id], (err, data) => {
    if (err)
      return res.status(res.statusCode).json("Something's Wrong...", err);
    return res.redirect("/admin");
  });
};
