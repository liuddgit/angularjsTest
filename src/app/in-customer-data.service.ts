import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InCustomerDataService {
  createDb() {
    const customers = [
      { id: 11, name: 'Mr. Nice', phone: '18600000001', own: '10.01', date: '2019-01-19 17:01:01',type:3,typecn:'未知'},
      { id: 12, name: 'Narco' , phone: '18600000002', own: '20.01', date: '2019-01-19 17:01:01',type:1,typecn:'重点'},
      { id: 13, name: 'Bombasto' , phone: '18600000003', own: '10.01', date: '2019-01-19 17:01:01',type:1,typecn:'重点'},
      { id: 14, name: 'Celeritas' , phone: '18600000004', own: '30.01', date: '2019-01-19 17:01:01',type:3,typecn:'未知'},
      { id: 15, name: 'Magneta' , phone: '18600000005', own: '10.01', date: '2019-01-19 17:01:01',type:2,typecn:'普通'},
      { id: 16, name: 'RubberMan' , phone: '18600000006', own: '50.01', date: '2019-01-19 17:01:01',type:1,typecn:'重点'},
      { id: 17, name: 'Dynama' , phone: '18600000007', own: '90.01', date: '2019-01-19 17:01:01',type:3,typecn:'未知'},
      { id: 18, name: 'Dr IQ' , phone: '18600000008', own: '70.01', date: '2019-01-19 17:01:01',type:1,typecn:'重点'},
      { id: 19, name: 'Magma' , phone: '18600000009', own: '60.01', date: '2019-01-19 17:01:01',type:3,typecn:'未知'},
      { id: 20, name: 'Tornado' , phone: '18600000010', own: '1000.01', date: '2019-01-19 17:01:01',type:2,typecn:'普通'}
    ];
    return {customers};
  }
}
