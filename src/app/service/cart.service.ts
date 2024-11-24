import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  storeCartData(data: any) {
    let cart = JSON.stringify(data);
    localStorage.setItem('cart', cart);
  }

  getCartData() {
    let cart: any = localStorage.getItem('cart');
    return JSON.parse(cart);
  }
}
