const { Comparison, ComparisonGoods, Goods } = require('../models/models')

class ComparisonController {
  async create(req, res) {
    const {comparisonId, goodId} = req.body

    try {
      const comparison = await Comparison.findByPk(comparisonId);
      if (!comparison) {
        throw new Error('Корзина не знайдена');
      }

      const goods = await Goods.findByPk(goodId);
      if (!goods) {
        throw new Error('Товар не знайдений');
      }
  
      const comparison_goods = await ComparisonGoods.create({
        comparisonId: comparisonId,
        goodId: goodId
      });
  
      return res.json(comparison_goods);
    } catch (error) {
      console.error('Сталася помилка при додаванні товару до корзини:', error.message);
    }
  }

  async getAll(req, res) {
    const comparison_goods = await ComparisonGoods.findAll()
    return res.json(comparison_goods)
  }

  async delete(req, res) {
    const {comparisonId, goodId} = req.body

    const item = await ComparisonGoods.destroy({where: {comparisonId: comparisonId, goodId: goodId}});

    return res.json(item);
  }
}

module.exports = new ComparisonController()