import { inject } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { MyDataService } from '../services/my-data.service';

export const productByIdGuard = (route: ActivatedRouteSnapshot) => {
  //vedi corso-angular nel file index.ts nella cartella guards per capire in maniera piu estesa
  return +route.paramMap.get('id')! <=
    inject(MyDataService).appleDevices.length - 1
    ? true
    : inject(Router).navigate(['no-resource']);
};
