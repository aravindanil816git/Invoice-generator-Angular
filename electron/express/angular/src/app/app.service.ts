import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {Router, NavigationExtras} from '@angular/router';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ConfigService {
  renderedDataObj;

  public invoiceData;

  constructor(private http: HttpClient, private router: Router) {
   }

   getConfig() {
    return this.http.get('assets/statecode.json');
  }


  previewpdf(invoice) {
      this.invoiceData = invoice;
     return this.http.post('http://localhost:3000/api/previewpdf', invoice).subscribe((result: any) => {
     let navigationExtras: NavigationExtras = {
      queryParams: {
          'renderHTml': result.renderedData
      }
    };
     this.router.navigate(['/preview'], navigationExtras);
    });
  }

  saveRenderPdf(html) {
    return this.http.post('http://localhost:3000/api/saverenderpdf', {'invoice': this.invoiceData ,
  'renderhtml': html}).subscribe((result: any) => {
    console.log('Success');
  });
}

}
