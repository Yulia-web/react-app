const { Favourite, FavouriteGoods, Goods } = require('../models/models')

class FavouriteController {
  async create(req, res) {
    const {favouriteId, goodId} = req.body

    try {
      const favourite = await Favourite.findByPk(favouriteId);
      if (!favourite) {
        throw new Error('Корзина не знайдена');
      }

      const goods = await Goods.findByPk(goodId);
      if (!goods) {
        throw new Error('Товар не знайдений');
      }
  
      const favourite_goods = await FavouriteGoods.create({
        favouriteId: favouriteId,
        goodId: goodId
      });
  
      return res.json(favourite_goods);
    } catch (error) {
      console.error('Сталася помилка при додаванні товару до корзини:', error.message);
    }
  }

  async getAll(req, res) {
    const favourite_goods = await FavouriteGoods.findAll()
    return res.json(favourite_goods)
  }

  async delete(req, res) {
    const {favouriteId, goodId} = req.body

    const item = await FavouriteGoods.destroy({where: {favouriteId: favouriteId, goodId: goodId}});

    return res.json(item);
  }
}

module.exports = new FavouriteController()