const Product = require('../models/Product');

module.exports = {
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false
    });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findOneAndDelete(req.params.id);

    res.send();
  }
};
