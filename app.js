
const ProductManager = require('./productManager');


const productManager = new ProductManager();


console.log(productManager.getProducts());


const newProduct = productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
console.log("Producto agregado:", newProduct);

console.log(productManager.getProducts());


try {
  const foundProduct = productManager.getProductById(newProduct.id);
  console.log("Producto encontrado por ID:", foundProduct);
} catch (error) {
  console.error(error.message);
}


try {
  const updatedProduct = productManager.updateProduct(newProduct.id, {
    price: 250,
    stock: 30
  });
  console.log("Producto actualizado:", updatedProduct);
} catch (error) {
  console.error(error.message);
}


try {
  const deletedProduct = productManager.deleteProduct(newProduct.id);
  console.log("Producto eliminado:", deletedProduct);
} catch (error) {
  console.error(error.message);
}

console.log(productManager.getProducts());
