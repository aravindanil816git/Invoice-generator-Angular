import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService} from './app.service';

import { AppRoutingModule } from './app-routing.module';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ViewDraftsComponent } from './view-drafts/view-drafts.component';
import { BillHistoryComponent } from './bill-history/bill-history.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { PreviewPdfComponent } from './preview-pdf/preview-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashBoardComponent,
    CreateInvoiceComponent,
    ViewDraftsComponent,
    BillHistoryComponent,
    InventoryListComponent,
    PreviewPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
