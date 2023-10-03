export default class GoodsStore {
  constructor() {
    this._types = [
      {id: 1, img: 'carriage.svg', name: 'Дитячі коляски'},
      {id: 2, img: 'room.svg', name: 'Дитяча кімната'},
      {id: 3, img: 'chair.svg', name: 'Стільці і шезлонги'},
      {id: 4, img: 'feeding.svg', name: 'Для годування'},
      {id: 5, img: 'soap.svg', name: 'Гігієна і догляд'},
      {id: 6, img: 'autochair.svg', name: 'Автокрісла'},
      {id: 7, img: 'car.svg', name: 'Дитячий транспорт'},
      {id: 8, img: 'toy.svg', name: 'Іграшки'},
      {id: 9, img: 'clothes.svg', name: 'Одяг'},
      {id: 10, img: 'new.svg', name: 'Новий товар'},
    ]
    this._brands = [
      {id: 1, name: 'Anex'},
      {id: 2, name: 'Bair'},
      {id: 3, name: 'BabyOno'},
      {id: 4, name: 'Carrello'},
      {id: 5, name: 'OK Baby'},
      {id: 6, name: 'Babyroom'},
      {id: 7, name: 'ZD'},
      {id: 8, name: 'Маленька Соня'},
    ]
    this._categories = [
      {id: 1, name: 'Коляски 2 в 1'},
      {id: 2, name: 'Зимові конверти'},
      {id: 3, name: 'Аксесуари та комплектуючі'},
      {id: 4, name: 'Муфти'},
    ]

    this._goods = [
      {id: 1, name: 'Прогулочная коляска Anex Air-X Woo by Woody Woods', quontity: 2, kod: 'Ax-SE-01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/81aed1d77090a66376a6f8fab3384a45.jpg',price: 12699, discount: 4, typeId: 1, brandId: 1, categoryId: 1},
      {id: 2, name: 'Прогулочная коляска Anex Air-X', quontity: 4, kod: 'Ax-08', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/cbc2cd4094d672c3cc4dc60470ef2e00.jpg',price: 12899, discount: 10, typeId: 1, brandId: 1, categoryId: 1},
      {id: 3, name: 'Муфта-варежки Anex для коляски', quontity: 2, kod: ' M03', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/153868e721a5d533efa71369ef454a6a.jpg',price: 2299, discount: 15, typeId: 1, brandId: 1, categoryId: 1},
      {id: 4, name: 'Зимний конверт Anex HUG 6м+', quontity: 4, kod: 'FH02', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/ec94ebe815d4d099efe8ecbd2f9ba042.jpg',price: 3299, discount: 5, typeId: 1, brandId: 1, categoryId: 1},
      {id: 5, name: 'Зимний конверт Anex WOM 0м+', quontity: 4, kod: ' FW03', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/2d255695bbff6805b5a39724c450899e.jpg',price: 1, discount: 25, typeId: 1, brandId: 1, categoryId: 1},
      {id: 6, name: 'Чехол на ножки Anex для коляски Air-Z', quontity: 4, kod: 'Az-Ac.f01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/ec1de28cd5ba1fd68934c81cd585803a.jpg',price: 749, discount: 0, typeId: 1, brandId: 1, categoryId: 1},
      {id: 7, name: 'Рюкзак Anex IQ на коляску', quontity: 2, kod: 'iq-ac.bp01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/d81890660ee7e195ca8206140dc4debd.jpg',price: 2399, discount: 5, typeId: 1, brandId: 1, categoryId: 1},
      {id: 8, name: 'Адаптеры Anex для автокресла на коляску Anex IQ', quontity: 4, kod: 'iq-ac.as01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/4c11a3f24f4c6caa850fd3cb1d0eece4.jpg',price: 759, discount: 0, typeId: 1, brandId: 1, categoryId: 1},
      {id: 9, name: 'Москитная сетка для люльки и сиденья Anex IQ', quontity: 4, kod: 'iq-ac.mc01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/c1993eb7dc5d9e019d8879dd63421b75.jpg',price: 599, discount: 10, typeId: 1, brandId: 1, categoryId: 1},
      {id: 10, name: 'Москитная сетка Anex Air-Z для коляски', quontity: 4, kod: 'Az-Acm01.1', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg',price: 689, discount: 0, typeId: 1, brandId: 1, categoryId: 1},
    ]

    this._reviewed = [
      {id: 1, name: 'Прогулочная коляска Anex Air-X Woo by Woody Woods', quontity: 4, kod: 'Ax-SE-01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/81aed1d77090a66376a6f8fab3384a45.jpg',price: 12699, discount: 4, typeId: 1, brandId: 1, categoryId: 1},
      {id: 2, name: 'Прогулочная коляска Anex Air-X', quontity: 4, kod: 'Ax-08', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/cbc2cd4094d672c3cc4dc60470ef2e00.jpg',price: 12899, discount: 0, typeId: 1, brandId: 1, categoryId: 1},
      {id: 3, name: 'Муфта-варежки Anex для коляски', quontity: 4, kod: ' M03', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/153868e721a5d533efa71369ef454a6a.jpg',price: 2299, discount: 0, typeId: 1, brandId: 1, categoryId: 1},
      {id: 7, name: 'Рюкзак Anex IQ на коляску', quontity: 2, kod: 'iq-ac.bp01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/d81890660ee7e195ca8206140dc4debd.jpg',price: 2399, discount: 5, typeId: 1, brandId: 1, categoryId: 1},
      {id: 8, name: 'Адаптеры Anex для автокресла на коляску Anex IQ', quontity: 4, kod: 'iq-ac.as01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/4c11a3f24f4c6caa850fd3cb1d0eece4.jpg',price: 759, discount: 0, typeId: 1, brandId: 1, categoryId: 1},
      {id: 9, name: 'Москитная сетка для люльки и сиденья Anex IQ', quontity: 4, kod: 'iq-ac.mc01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/c1993eb7dc5d9e019d8879dd63421b75.jpg',price: 599, discount: 10, typeId: 1, brandId: 1, categoryId: 1},
      {id: 10, name: 'Москитная сетка Anex Air-Z для коляски', quontity: 4, kod: 'Az-Acm01.1', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/c6270fe16f3dd2ad3c3f433c856edb13.jpg',price: 689, discount: 0, typeId: 1, brandId: 1, categoryId: 1},
    ]

    this._basket = [
      {id: 1, name: 'Прогулочная коляска Anex Air-X Woo by Woody Woods', quontity: 4, kod: 'Ax-SE-01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/81aed1d77090a66376a6f8fab3384a45.jpg',price: 12699, discount: 4, typeId: 1, brandId: 1, categoryId: 1},
      {id: 9, name: 'Москитная сетка для люльки и сиденья Anex IQ', quontity: 4, kod: 'iq-ac.mc01', rating: 0, img: 'https://static.ma.com.ua/images/1000xAUTO/c1993eb7dc5d9e019d8879dd63421b75.jpg',price: 599, discount: 10, typeId: 1, brandId: 1, categoryId: 1},
    ]

    this._selectedCategory = {}
    this._selectedType = {}
    this._selectedBrand = {}
  }

  setReviewed(types) {
    this._types = types
  }

  setType(types) {
    this._types = types
  }

  setBrand(brands) {
    this._brands = brands
  }

  setCategogies(categories) {
    this._categories = categories
  }

  setGoods(goods) {
    this._goods = goods
  }

  setBasket(basket) {
    this._basket = basket;
  }

  setSelectedCategory(category) {
    this._selectedCategory = category
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get reviewed() {
    return this._reviewed
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get categories() {
    return this._categories
  }

  get goods() {
    return this._goods
  }

  get basket() {
    return this._basket
  }

  get selectedCategory() {
    return this._selectedCategory
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }
}