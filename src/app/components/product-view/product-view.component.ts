import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  product: any;
  productId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private myDataService: MyDataService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      //+ è come fare parseInt
      this.productId = +params.get('id')!;
      this.product = this.myDataService.getProductByIndex(this.productId);
    });
  }
}
