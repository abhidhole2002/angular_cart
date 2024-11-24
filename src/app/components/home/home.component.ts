import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../service/get-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private getData: GetDataService) {}

  allData: any;
  products: any;
  allProd: any;

  ngOnInit(): void {
    this.allData = this.getData.categoriesData;
    this.allProd = this.getData.productData;
    this.products = this.getData.productData;
  }

  filterByCtg(category: string): void {
    console.log(category, "category");
    if (category === 'all') {
        this.products = this.allProd;
    } else {
      this.products = this.allProd.filter((p: any) => p.category === category);
    }
    console.log(this.products, "filtered products");
  }
  

  
}
