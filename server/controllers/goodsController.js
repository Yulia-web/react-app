const uuid = require('uuid')
const path = require('path')
const { Goods, GoodsInfo, GoodsDescription, GoodsColor, GoodsGender } = require('../models/models')
const ApiError = require('../error/ApiError')

class GoodsController {
  async create(req, res, next) {
    try {
      const { name, quontity, kod, color, gender, price, discount, info, description, typeId, brandId, categoryId } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const goods = await Goods.create({ name, quontity, kod, price, discount, typeId, brandId, categoryId, img: fileName })

      if (info) {
        info = JSON.parse(info)
        info.forEach(i =>
          GoodsInfo.create({
            title: i.title,
            description: i.description,
            goodsId: goods.id
          })
        )
      }
      if (description) {
        description = JSON.parse(description)
        description.forEach(i =>
          GoodsDescription.create({
            description: i.description,
            img: i.img,
            goodsId: goods.id
          })
        )
      }
      if (color) {
        color = JSON.parse(color)
        color.forEach(i =>
          GoodsColor.create({
            name: i.name,
            goodsId: goods.id
          })
        )
      }
      if (gender) {
        gender = JSON.parse(gender)
        gender.forEach(i =>
          GoodsGender.create({
            name: i.name,
            goodsId: goods.id
          })
        )
      }

      return res.json(goods)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let { brandId, typeId } = req.query
    let { limit, page } = req.query
    page = page || 1
    limit = limit || 32
    let offset = page * limit - limit
    let goods;

    if (!brandId && !typeId) {
      goods = await Goods.findAndCountAll({ limit, offset })
    }
    if (brandId && !typeId) {
      goods = await Goods.findAndCountAll({ where: { brandId }, limit, offset })
    }
    if (!brandId && typeId) {
      goods = await Goods.findAndCountAll({ where: { typeId }, limit, offset })
    }
    if (brandId && typeId) {
      goods = await Goods.findAndCountAll({ where: { brandId, typeId }, limit, offset })
    }
    return res.json(goods)
  }

  async getOne(req, res) {
    const { id } = req.params
    const goods = await Goods.findOne(
      {
        where: { id },
        include: [
          {
            model: GoodsInfo,
            as: 'info',
          },
          {
            model: GoodsDescription,
            as: 'description',
          },
          {
            model: GoodsColor,
            as: 'color',
          },
          {
            model: GoodsGender,
            as: 'gender',
          }
        ]
      },
    )

    return res.json(goods);
  }

  async delete(req, res) {
    const { id } = req.body
    const goods = await Goods.destroy({where: {id}})

    return res.json(goods);
  }
}

module.exports = new GoodsController()