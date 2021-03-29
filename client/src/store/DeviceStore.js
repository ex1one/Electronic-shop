import { toJS } from 'mobx';
import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        this._basketItems = []
        // this._basketItemsLength = 0
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setAddTypes(data) {
        this._types = [...this.types, data]
    }
    setDeleteTypes(id) {
        this._types = this.types.filter(item => item.id !== id)
    }
    setBrands(brands) {
        this._brands = brands
    }
    setAddBrands(data) {
        this._brands = [...this.brands, data]
    }
    setDeleteBrands(id) {
        this._brands = this.brands.filter(item => item.id !== id)
    }
    setDevices(devices) {
        this._devices = devices
    }
    setAddDevices(data) {
        this._devices = [...this.devices, data]
    }
    setDeleteDevices(id) {
        this._devices = this.devices.filter(item => item.id !== id)
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setBasketItems(item) {
        if (this.basketItems.some(e => e.name === item.name)) {
            alert('товар уже добавлен в корзину');
        }
        else {
            this._basketItems = [...this.basketItems, item];
        }
    }
    setbasketItemsCounter(id) {
        return this.basketItems.filter(item => item.id === id).length
    }
    setBasketPlusItem(item) {
        this._basketItems = [...this.basketItems, item]
        this.setbasketItemsCounter(item.id)
    }
    setBasketMinusItem(id) {
        this.basketItems.splice(this.basketItems.findIndex(item => item.id === id), 1)
        this.setbasketItemsCounter(id)
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
    get basketItems() {
        return this._basketItems
    }
    get counter() {
        return this._basketItemsLength
    }

}
