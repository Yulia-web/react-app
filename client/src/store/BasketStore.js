export default class GoodsStore { 
  constructor() {
    this._basket = []
    this._favourite = []
    this._comparison = []
    this._reviewed = []
  }

  setBasket(basket) {
    this._basket = basket
  }

  setFavourite(favourite) {
    this._favourite = favourite
  }

  setComparison(comparison) {
    this._comparison = comparison
  }

  setReviewed(reviewed) {
    this._reviewed = reviewed
  }

  get Basket() {
    return this._basket
  }

  get Favourite() {
    return this._favourite
  }

  get Comparison() {
    return this._comparison
  }

  get Reviwed() {
    return this._reviewed
  }
}