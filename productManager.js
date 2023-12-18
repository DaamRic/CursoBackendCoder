class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.products.some(product => product.code === code)) {
        throw new Error("Error: El código del producto ya está en uso.");
      }
  
      const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  
      const product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  

      this.products.push(product);
  
      return product;
    }
  
    getProductById(productId) {
      const product = this.products.find(product => product.id === productId);
  
      if (!product) {
        throw new Error("Error: Producto no encontrado.");
      }
  
      return product;
    }
  }
  
  module.exports = ProductManager;
  