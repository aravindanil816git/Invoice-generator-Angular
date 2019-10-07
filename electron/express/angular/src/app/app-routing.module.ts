import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ViewDraftsComponent } from './view-drafts/view-drafts.component';
import { BillHistoryComponent } from './bill-history/bill-history.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import {PreviewPdfComponent} from './preview-pdf/preview-pdf.component'


const routes: Routes = [
  {path: 'dashboard', component: DashBoardComponent},
  {path: 'create_invoice', component: CreateInvoiceComponent},
  {path: 'drafts', component: ViewDraftsComponent},
  {path: 'history', component: BillHistoryComponent},
  {path: 'inventory', component: InventoryListComponent},
  {path: 'preview', component : PreviewPdfComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
