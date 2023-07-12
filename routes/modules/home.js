const express = require('express')
const router = express.Router()

const db = require('../../models')
const Item = db.Item
const User = db.User

router.get('/', (req, res) => {
  return Item.findAll({
    raw: true,
    nest: true
  })
    .then((items) => { return res.render('index', { items: items }) })
    .catch((error) => { return res.status(422).json(error) })
})

module.exports = router