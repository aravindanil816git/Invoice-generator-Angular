import { Component, OnInit } from '@angular/core';
import { ConfigService} from '../app.service';
import { ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-preview-pdf',
  templateUrl: './preview-pdf.component.html',
  styleUrls: ['./preview-pdf.component.css']
})
export class PreviewPdfComponent implements OnInit {

  safeHtml;
  renderedHtml
  constructor(private configService: ConfigService, private route: ActivatedRoute,private sanitizer: DomSanitizer) {
  }


  /*onLoadFunc(myIframe) {
    myIframe.contentWindow.location.reload();
  }*/
  saveRenderPdf() {
    this.configService.saveRenderPdf(this.renderedHtml);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.renderedHtml = params['renderHTml'];
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.renderedHtml);

  });
  }




}


