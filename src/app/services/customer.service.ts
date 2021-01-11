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
  fake_cid = 1;

  constructor(private db: AngularFirestore) {
    // 設定資料庫集合參照點
    this.customerRef = this.db.collection<Customer>('customers');
  }
  // 新增一筆會員資料
  addCustomer(customer: Customer): Promise<any> {
    customer.customer_id = 'C' + ('0000' + this.fake_cid).slice(-4);
    this.fake_cid++;
    return this.customerRef.add(customer);
  }
  // 刪除一筆會員資料
  removeCustomer(id: string): Promise<any> {
    // 不可回復的行為
    const docRef: AngularFirestoreDocument = this.db.doc<Customer>(`customers/${id}`);
    return docRef.delete();
    // 通常會給一個欄位放置帳號的狀態，需要刪除就是會改變帳號的狀態。
  }
  // 修改一筆會員資料
  // 針對文件跟層級來做修改
  updateCustomer(id: string, data: Customer): Promise<any> {
    const docRef: AngularFirestoreDocument
      = this.db.doc<Customer>(`customers/${id}`);
    return docRef.set(data, { merge: true });
  }
  // 取得所有會員資料
  getCustomers(): Observable<CustomerId[]> {
    return this.customers = this.customerRef.valueChanges({ idField: 'id' });
  }
}
