
const { Carrito } = require('./carritoModel.js');
const { Product } = require('./productModel.js');
const { User } = require('./userModel.js');

class Factory {

  userModel;
  productModel;
  carritoModel;
  model;

  constructor(type) {
    if (type === 'user') {
      // crear un user
      this.model = this.getUserModelInstance();
    } else if (type === 'carrito') {
      // crear un carrito
      this.model = this.getCarritoModelInstance();
    } else {
      // crear un producto
      this.model = this.getProductModelInstance();
    }
  }

  getUserModelInstance () {
    if (!this.userModel) {
      this.userModel = new User();
    }
    return this.userModel;
  }

  getProductModelInstance () {
    if (!this.productModel) {
      this.productModel = new Product();
    }
    return this.productModel;
  }

  getCarritoModelInstance () {
    if (!this.carritoModel) {
      this.carritoModel = new Carrito();
    }
    return this.carritoModel;
  }

  getModel() {
    return this.model;
  }

}

const opcion = process.argv[ 2 ] || 'product'

const factory = new Factory(opcion);

module.exports = {
  factoryInstance: factory
};
