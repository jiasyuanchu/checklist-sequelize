const express = require('express')
const router = express.Router()

const db = require('../../models')
const Item = db.Item

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Item.findByPk(id)
    .then(item => res.render('detail', { item: item.toJSON() }))
    .catch(error => console.log(error))
})

module.exports = router