const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    console.log('in details router with param:', req.params);
//   const query = `SELECT * FROM movies ORDER BY "title" ASC`;
//   pool.query(query)
//     .then( result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all movies', err);
//       res.sendStatus(500)
//     })

});

router.post('/:id', (req, res) => {
  console.log(req.body);
})


module.exports = router;