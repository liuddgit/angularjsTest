import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CompOrderComponent } from './comp-order/comp-order.component';
import { CompCustomerComponent } from './comp-customer/comp-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { IndexComponent } from './index/index.component';
import { CompTabComponent } from './comp-tab/comp-tab.component';
import { environment } from '../environments/environment';
import { CompCalculatorAddComponent } from './comp-calculator-add/comp-calculator-add.component';
import { CompCalculatorComponent } from './comp-calculator/comp-calculator.component';
import { CompTopComponent } from './comp-top/comp-top.component';


@NgModule({
  declarations: [
    AppComponent,
    CompOrderComponent,
    CompCustomerComponent,
    CustomersComponent,
    OrdersComponent,
    IndexComponent,
    CompTabComponent,
    CompCalculatorAddComponent,
    CompCalculatorComponent,
    CompTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    environment.production?[]:HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
