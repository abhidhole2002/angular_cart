import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../service/get-data.service';
import { CartService } from '../../service/cart.service';
import { Iproduct } from '../../model/interfaces/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private getData: GetDataService,
    private cart: CartService
  ) {}

  getParamValue: any;
  getProdByParams: any;
  allD: any;
  CartData: Iproduct[] = [];

  priceRanges = [
    { min: 100, max: 300 },
    { min: 301, max: 500 },
    { min: 501, max: 1000 },
    { min: 1001, max: 5000 },
    { min: 5001, max: 10000 },
    { min: 10001, max: 20000 },
    { min: 20001, max: 50000 },
  ];

  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('category');

    if (this.getParamValue === 'all') {
      this.getProdByParams = this.getData.productData;
      return;
    }

    this.allD = this.getData.productData.filter(
      (p: any) => p.category === this.getParamValue
    );
    this.getProdByParams = this.getData.productData.filter(
      (p: any) => p.category === this.getParamValue
    );

    console.log(this.getProdByParams, 'ptoducts');
  }

  onChangePrice(event: any) {
    let selectedVal = event.target.value;
    console.log(selectedVal, 'jhgfjh');
    let val = selectedVal.split(' - ');
    let min = Number(val[0]);
    let max = Number(val[1]);
    console.log(min, max);

    this.getProdByParams = this.allD.filter((p: any) => {
      return p.price >= min && p.price <= max;
    });
  }

  addToCart(data: any) {
    console.log(data);
    console.log('product addedd');
    this.CartData.push(data);

    this.cart.storeCartData(this.CartData);

  }
}
