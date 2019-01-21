import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const customers = [
      { id: 11, image:'./assets/images/customer.jpg', name: 'Mr. Nice', phone: '18600000001', own: '10.01', date: '2019-01-19 17:01:01',type:3,typecn:'未知'},
      { id: 12, image:'./assets/images/customer.jpg', name: 'Narco' , phone: '18600000002', own: '20.01', date: '2019-01-19 17:01:01',type:1,typecn:'重点'},
      { id: 13, image:'./assets/images/customer.jpg', name: 'Bombasto' , phone: '18600000003', own: '10.01', date: '2019-01-19 17:01:01',type:1,typecn:'重点'},
      { id: 14, image:'./assets/images/customer.jpg', name: 'Celeritas' , phone: '18600000004', own: '30.01', date: '2019-01-19 17:01:01',type:3,typecn:'未知'},
      { id: 15, image:'./assets/images/customer.jpg', name: 'Magneta' , phone: '18600000005', own: '10.01', date: '2019-01-19 17:01:01',type:2,typecn:'普通'},
      { id: 16, image:'./assets/images/customer.jpg', name: 'RubberMan' , phone: '18600000006', own: '50.01', date: '2019-01-19 17:01:01',type:1,typecn:'重点'},
      { id: 17, image:'./assets/images/customer.jpg', name: 'Dynama' , phone: '18600000007', own: '90.01', date: '2019-01-19 17:01:01',type:3,typecn:'未知'},
      { id: 18, image:'./assets/images/customer.jpg', name: 'Dr IQ' , phone: '18600000008', own: '70.01', date: '2019-01-19 17:01:01',type:1,typecn:'重点'},
      { id: 19, image:'./assets/images/customer.jpg', name: 'Magma' , phone: '18600000009', own: '60.01', date: '2019-01-19 17:01:01',type:3,typecn:'未知'},
      { id: 20, image:'./assets/images/customer.jpg', name: 'Tornado' , phone: '18600000010', own: '1000.01', date: '2019-01-19 17:01:01',type:2,typecn:'普通'}
    ];
    const orders = [
      { id: '201901200001', image:'assets/images/order.jpg', daynum: 1 ,name:'张三', fee: '10.01', date: '2019-01-19 17:01:01',status:'部分发货'},
      { id: '201901200002', image:'assets/images/order.jpg', daynum: 2 ,name:'李四', fee: '20.01', date: '2019-01-19 17:01:01',status:'全部发货'},
      { id: '201901200003', image:'assets/images/order.jpg', daynum: 3 ,name:'张三', fee: '10.01', date: '2019-01-19 17:01:01',status:'全部发货'},
      { id: '201901200004', image:'assets/images/order.jpg', daynum: 1 ,name:'王五', fee: '30.01', date: '2019-01-19 17:01:01',status:'部分发货'},
      { id: '201901200005', image:'assets/images/order.jpg', daynum: 2 ,name:'李四', fee: '10.01', date: '2019-01-19 17:01:01',status:'未发货'},
      { id: '201901200006', image:'assets/images/order.jpg', daynum: 3 ,name:'张三', fee: '50.01', date: '2019-01-19 17:01:01',status:'全部发货'},
      { id: '201901200007', image:'assets/images/order.jpg', daynum: 1 ,name:'王五', fee: '90.01', date: '2019-01-19 17:01:01',status:'部分发货'},
      { id: '201901200008', image:'assets/images/order.jpg', daynum: 2 ,name:'王五', fee: '70.01', date: '2019-01-19 17:01:01',status:'全部发货'},
      { id: '201901200009', image:'assets/images/order.jpg', daynum: 2 ,name:'李四', fee: '60.01', date: '2019-01-19 17:01:01',status:'部分发货'},
      { id: '201901200010', image:'assets/images/order.jpg', daynum: 3 ,name:'张三', fee: '1000.01',date: '2019-01-19 17:01:01',status:'未发货'}
    ];
    return {customers,orders};
  }
}
