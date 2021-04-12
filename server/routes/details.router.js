const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.put("/:id", (req, res) => {
  console.log("in details router with param:", req.params);
  // query to send via pool, join tables and grab all data
  const query = `
    SELECT *
    FROM "movies"
    JOIN "movies_genres" ON "movies_genres".movie_id = "movies".id
    JOIN "genres" ON "movies_genres".genre_id = "genres".id
    WHERE "movies".id = $1;
  `;
  pool
    // grab id for query
    .query(query, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

router.post("/:id", (req, res) => {
  console.log(req.body);
});

module.exports = router;
