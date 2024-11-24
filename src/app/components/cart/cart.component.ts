import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  constructor(private cart:CartService){}

  getCartData:any;

  ngOnInit(): void {
    this.getCartData = this.cart.getCartData();

    console.log(this.getCartData,"this")
    
  }


}
