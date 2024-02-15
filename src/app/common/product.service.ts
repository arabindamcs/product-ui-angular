import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: { id: number, name: string, quantity: number, price: number }[] = [
    // Add more products as needed
    ];
  constructor(private loggingService: LoggingService) { }
  // Create a new EventEmitter
  //productAdded = new EventEmitter<{ name: string, quantity: number, price: number }>();
  productAdded = new EventEmitter<{id: number, name: string, quantity: number, price: number }[]>();
  productUpdated = new EventEmitter<{id: number, name: string, quantity: number, price: number }[]>();
  productDeleted = new EventEmitter<{id: number, name: string, quantity: number, price: number }[]>();
  // Your existing methods for getting products, etc.
  // Add a method to add a new product
  addProduct(newProduct: { name: string, quantity: number, price: number }) {
    
    // Add the new product to the list
    this.products.push({
      id: this.products.length + 1, // Assuming each new product gets a unique ID
      ...newProduct
    });
    // Emit the productAdded event
    //this.productAdded.emit(newProduct);
    this.productAdded.emit(this.products);
    // You can add logging or other functionality here if needed
    // Return the updated list of products
    return this.products;
  }
   // Method to get all products
   getProducts() {
    return this.products;
  }
  // Method to update a product
  updateProduct(updatedProduct: { id: number, name: string, quantity: number, price: number }) {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      // Update the product in the list
      this.products[index] = { ...updatedProduct };
      // Emit the productUpdated event with the updated product
      this.productUpdated.emit(this.products);
      // You can add logging or other functionality here if needed
    }
    // Return the updated list of products
    return this.products;
  }
  // Method to delete a product
  deleteProduct(productId: number) {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      // Remove the product from the list
      const deletedProduct = this.products.splice(index, 1)[0];
      // Emit the productDeleted event with the deleted product's ID
      this.productDeleted.emit(this.products);
      // You can add logging or other functionality here if needed
    }
    // Return the updated list of products
    return this.products;
  }
  
}