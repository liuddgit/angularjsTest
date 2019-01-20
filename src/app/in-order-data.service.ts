import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InOrderDataService {
  createDb() {
    const orders = [
      { id: '201901200001', daynum: 1 ,name:'张三', fee: '10.01', date: '2019-01-19 17:01:01',status:'部分发货'},
      { id: '201901200002', daynum: 2 ,name:'李四', fee: '20.01', date: '2019-01-19 17:01:01',status:'全部发货'},
      { id: '201901200003', daynum: 3 ,name:'张三', fee: '10.01', date: '2019-01-19 17:01:01',status:'全部发货'},
      { id: '201901200004', daynum: 1 ,name:'王五', fee: '30.01', date: '2019-01-19 17:01:01',status:'部分发货'},
      { id: '201901200005', daynum: 2 ,name:'李四', fee: '10.01', date: '2019-01-19 17:01:01',status:'未发货'},
      { id: '201901200006', daynum: 3 ,name:'张三', fee: '50.01', date: '2019-01-19 17:01:01',status:'全部发货'},
      { id: '201901200007', daynum: 1 ,name:'王五', fee: '90.01', date: '2019-01-19 17:01:01',status:'部分发货'},
      { id: '201901200008', daynum: 2 ,name:'王五', fee: '70.01', date: '2019-01-19 17:01:01',status:'全部发货'},
      { id: '201901200009', daynum: 2 ,name:'李四', fee: '60.01', date: '2019-01-19 17:01:01',status:'部分发货'},
      { id: '201901200010', daynum: 3 ,name:'张三', fee: '1000.01',date: '2019-01-19 17:01:01',status:'未发货'}
    ];
    return {orders};
  }
}
