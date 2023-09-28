const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING, unique: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
})

// -------------------------------------------------------------------- Basket

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const BasketGoods = sequelize.define('basket_goods', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

// -------------------------------------------------------------------- Favourite

const Favourite = sequelize.define('favourite', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const FavouriteGoods = sequelize.define('favourite_goods', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

// -------------------------------------------------------------------- Comparison

const Comparison = sequelize.define('comparison', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const ComparisonGoods = sequelize.define('comparison_goods', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

// --------------------------------------------------------------------- Reviewed

const Reviewed = sequelize.define('reviewed', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const ReviewedGoods = sequelize.define('reviewed_goods', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

// ---------------------------------------------------------------------- Goods

const Goods = sequelize.define('goods', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allownull: false },
  quontity: { type: DataTypes.INTEGER, allownull: false },
  kod: { type: DataTypes.STRING, allownull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allownull: false },
  price: { type: DataTypes.INTEGER, allownull: false },
  discount: { type: DataTypes.INTEGER, allownull: false, defaultValue: 0 },
})

// ---------------------------------------------------------------------- Brand 

const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allownull: false },
})

// ---------------------------------------------------------------------- Type

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  img: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING, unique: true, allownull: false },
})

// ---------------------------------------------------------------------- Category

const Category = sequelize.define('category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allownull: false },
})

// ---------------------------------------------------------------------- Rating

const Rating = sequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allownull: false },
})

// ---------------------------------------------------------------------- Goods info

const GoodsInfo = sequelize.define('goods_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allownull: false },
  description: { type: DataTypes.STRING, allownull: false },
})

// ---------------------------------------------------------------------- Goods description

const GoodsDescription = sequelize.define('goods_description', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allownull: false },
  img: { type: DataTypes.STRING },
})

// ---------------------------------------------------------------------- Goods color

const GoodsColor = sequelize.define('goods_color', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allownull: false },
})

// ---------------------------------------------------------------------- Goods gender

const GoodsGender = sequelize.define('goods_gender', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allownull: false },
})

const TypeCategory = sequelize.define('type_category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasOne(Favourite)
Favourite.belongsTo(User)

User.hasOne(Comparison)
Comparison.belongsTo(User)

User.hasOne(Reviewed)
Reviewed.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketGoods)
BasketGoods.belongsTo(Basket)

Favourite.hasMany(FavouriteGoods)
FavouriteGoods.belongsTo(Favourite)

Comparison.hasMany(ComparisonGoods)
ComparisonGoods.belongsTo(Comparison)

Reviewed.hasMany(ReviewedGoods)
ReviewedGoods.belongsTo(Reviewed)

Type.hasMany(Goods)
Goods.belongsTo(Type)

Brand.hasMany(Goods)
Goods.belongsTo(Brand)

Category.hasMany(Goods)
Goods.belongsTo(Category)

Goods.hasMany(Rating)
Rating.belongsTo(Goods)

Goods.hasMany(BasketGoods)
BasketGoods.belongsTo(Goods)

Goods.hasMany(FavouriteGoods)
FavouriteGoods.belongsTo(Goods)

Goods.hasMany(ComparisonGoods)
ComparisonGoods.belongsTo(Goods)

Goods.hasMany(ReviewedGoods)
ReviewedGoods.belongsTo(Goods)

Goods.hasMany(GoodsInfo, {as: 'info'})
GoodsInfo.belongsTo(Goods)

Goods.hasMany(GoodsDescription, {as: 'description'})
GoodsDescription.belongsTo(Goods)

Goods.hasMany(GoodsColor, {as: 'color'})
GoodsColor.belongsTo(Goods)

Goods.hasMany(GoodsGender, {as: 'gender'})
GoodsGender.belongsTo(Goods)

Type.belongsToMany(Category, { through: TypeCategory })
Category.belongsToMany(Type, { through: TypeCategory })

module.exports = {
  User,
  Basket,
  BasketGoods,
  Favourite,
  FavouriteGoods,
  Comparison,
  ComparisonGoods,
  Reviewed,
  ReviewedGoods,
  Goods,
  Brand,
  Type,
  Category,
  Rating,
  GoodsInfo,
  GoodsDescription,
  GoodsColor,
  GoodsGender,
  TypeCategory
}
