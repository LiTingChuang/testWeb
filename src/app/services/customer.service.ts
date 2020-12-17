import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerId, Customer } from '../models/customer';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  customerRef: AngularFirestoreCollection<Customer>; // DB參照點
  customers: Observable<CustomerId[]> | undefined;    // 動態資料流(供訂閱)

  constructor(private db: AngularFirestore) {
    // 設定資料庫集合參照點
    this.customerRef = this.db.collection<Customer>('customers');
  }
  // 新增一筆會員資料
  addCustomer(customer: Customer): Promise<any> {
    return new Promise((resovle, reject) => { }); // 暫時使用
  }
  // 刪除一筆會員資料
  removeCustomer(id: string): Promise<any> {
    return new Promise((resovle, reject) => { }); // 暫時使用
  }
  // 修改一筆會員資料
  updateCustomer(id: string, data: Customer): Promise<any> {
    return new Promise((resovle, reject) => { }); // 暫時使用
  }
  // 取得所有會員資料
  getCustomers(): Observable<CustomerId[]> {
    return this.customers = this.customerRef.valueChanges({idField: 'id'});
  }
}
