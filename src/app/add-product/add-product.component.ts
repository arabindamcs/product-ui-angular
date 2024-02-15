import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  //@Output() productAdded = new EventEmitter<{ name: string, quantity: number, price: number }>();

  product: { name: string, quantity: number, price: number } = { name: '', quantity: 0, price: 0 };

  constructor(private productService: ProductService) { }

  onSubmit() {
    // Emit the productAdded event with the product data
    //this.productAdded.emit(this.product); 
    this.productService.addProduct(this.product);
    console.log('Product:', this.product);
  }

}
