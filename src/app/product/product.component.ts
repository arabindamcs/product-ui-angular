import { Component } from '@angular/core';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products: { id: number, name: string, quantity: number, price: number }[] = [];

  constructor(private productService: ProductService) {

    // Get initial products
    this.products =  productService.getProducts();

    // Subscribe to the productAdded event
    this.productService.productAdded.subscribe((products) => {
      this.products = products;
    });    
  
    // Subscribe to the productUpdated event
    this.productService.productUpdated.subscribe((products) => {
      this.products = products;
    });

    // Subscribe to the productDeleted event
    this.productService.productDeleted.subscribe((products) => {
      this.products = products;
    });

  }

  // Method to handle update button click
  //updateProduct(product: { id: number, name: string, quantity: number, price: number }) {
    updateProduct(product: any) {

      if (product.editing) {
        // Save the changes if any product is being edited
        // Update this part based on your actual update logic
        console.log('Saving changes for product ID:', product.id);
        this.productService.updateProduct({ id: product.id, name: product.name, quantity: product.quantity, price: product.price });
      } else {
        // Start editing the selected product
        product.editing = true;
      }

      console.log('Saving changes for product ID:', product.id);
      
  }

  // Method to handle delete button click
  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId);

  }
  

    
}
