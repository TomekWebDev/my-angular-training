import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  appleDevices = [
    {
      id: 0,
      name: 'Macbook Air',
      category: 'Laptop',
      price: 100,
      percentDiscount: 10,
    },
    {
      id: 1,
      name: 'Macbook Pro',
      category: 'Laptop',
      price: 100,
      percentDiscount: 20,
    },
    {
      id: 2,
      name: 'Iphone 14 Pro',
      category: 'Phone',
      price: 100,
      percentDiscount: 30,
    },
    {
      id: 3,
      name: 'Iphone X',
      category: 'Phone',
      price: 100,
      percentDiscount: 50,
    },
  ];

  getAllProducts() {
    return this.appleDevices;
  }

  getProductByIndex(index: number) {
    return this.appleDevices[index]!;
  }

  getProductByCategory(chosenCategory: string) {
    return this.appleDevices.map(
      (element) => element.category === chosenCategory
    );
  }

  constructor() {}
}
