import { Component, OnInit } from '@angular/core';
import { ConfigService} from '../app.service'
import {Router} from '@angular/router';



@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  invoicedata: InvoiceModel;
  id = 0;
  stateList: any ;
  renderedDataObj

  saveEntry(item: ItemModel) {
    /*if (item.name === '' || item.total === 0) {
      $.notify({
        icon: 'ti-alert',
        message: 'Sorry, cannot add empty items'
      }, {
          type: 'warning',
      });
      return;
    }*/


      item.editMode = false;
  }

  addnewEntry() {
    let newitem: ItemModel = {};
    newitem.uid = this.id + 1;
    newitem.name = '';
    newitem.editMode = true;
    newitem.total = 0;
    newitem.taxslab = 18;
    this.invoicedata.itemList.push(newitem);
    this.id = this.id + 1;
  }

  deleteItem(id: number) {
    for (let  i = 1 ; i < this.invoicedata.itemList.length ; i++) {
      if (this.invoicedata.itemList[i].uid === id) {
        this.invoicedata.itemList.splice(i , 1);
        break;
      }
    }
  }

  getStateCodePAN(gst: string) {
    if (gst.length > 12) {
      this.invoicedata.stateCode = gst.substr(0 , 2);
      this.invoicedata.pan = gst.substr(2 , 10);
      this.stateList.forEach(element => {
        if ( element.code == this.invoicedata.stateCode) {
          this.invoicedata.stateName = element.state;
        }
      });
    }
  }

  calculateTotal(item: ItemModel) {
    item.total = Math.ceil(item.rate * item.quantity);
  }

  calculateTaxable(item: ItemModel) {
    item.taxable = item.total -  Math.ceil(item.discount * item.total / 100 );
  }

  previewPdf() {
    this.configService.previewpdf(this.invoicedata);

  }


  formatdate(date: Date) {
    let str = date.toString();
    return str.substr(0, str.indexOf('T'));
  }
  constructor(private configService: ConfigService, private router: Router) {
    this.invoicedata = {};
    this.invoicedata.date = new Date().toString();
    this.invoicedata.itemList = [];
    this.addnewEntry();
    configService.getConfig()
    .subscribe((data => {
      this.stateList = data
    })
    );
  }

  ngOnInit() {
  }

}
export class ItemModel {
  uid?: number;
  name?: string;
  sac?: number;
  uom?: string;
  quantity?: number;
  rate?: number;
  total?: number;
  discount?: number;
  taxable?: number;
  editMode?: boolean;
  taxslab?: number;
  itemid?: number;
}

export class InvoiceModel {
  date? = '';
  company_name? = ''; po_num? = ''; address? = ''; consignnee? = '';
  duedate?  = ''; contract_no? = ''; contract_date? = '';
  pan? = ''; stateCode? = ''; stateName? = ''; gst? = '';
  terms? = ''; delivery_no? = ''; transporter? = ''; transport_mode? = '';
  vehicle_num? = ''; lr? = ''; lr_date? = ''; lc? = ''; lc_date? = '';
  itemList?: ItemModel[]; taxreverse? = 0;
  consignee_address? = '';
}
