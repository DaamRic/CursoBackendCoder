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
  
    updateProduct(productId, updatedFields) {
      const productIndex = this.products.findIndex(product => product.id === productId);
  
      if (productIndex === -1) {
        throw new Error("Error: Producto no encontrado para actualizar.");
      }
  
     
      updatedFields.id = productId;
  
      
      Object.assign(this.products[productIndex], updatedFields);
  
      return this.products[productIndex];
    }
  
    deleteProduct(productId) {
      const productIndex = this.products.findIndex(product => product.id === productId);
  
      if (productIndex === -1) {
        throw new Error("Error: Producto no encontrado para eliminar.");
      }
  
      
      const deletedProduct = this.products.splice(productIndex, 1)[0];
  
      return deletedProduct;
    }
  }
  
  module.exports = ProductManager;
  