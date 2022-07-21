import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerId, Customer } from 'src/app/models/customer';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { ConfirmModalComponent } from 'src/app/modal/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  customers: Observable<CustomerId[]> | undefined; // 所有客戶的資料流
  subscription: any;
  edit: boolean | undefined;

  constructor(private cs: CustomerService,
    public modal: NgbModal) { }

  ngOnInit() {
    this.customers = this.cs.getCustomers(); // 取得所有客戶的資料流
  }
  // open(): 開啟Modal視窗
  // 彈出視窗: 新增一筆客戶資料
  openModal(cdoc?: CustomerId) {
    const modalRef = this.modal.open(CustomerFormComponent, {
      size: 'lg'
    });

    // 傳資料進來，代表是[編輯]功能, 而非新增
    if (cdoc) {
      modalRef.componentInstance.cdoc = cdoc;
      this.edit = true;   // 編輯
    } else {
      this.edit = false;  // 新增
    }
    // 訂閱資料:result為表單頁發佈的資料
    this.subscription = modalRef.componentInstance.result.subscribe(
      // (回來的東西) => {程式的主體}
      (result: Customer) => {
        // && 前後兩個條件要成立才可以執行
        if (this.edit && cdoc) {
          this.cs.updateCustomer(cdoc.id, result);
        } else {
          this.cs.addCustomer(result);
        }
      }
    );

    // 
    // modalRef.componentInstance.result.subscribe(
    //   (result: Customer) => {
    //     console.log('表單輸入的資料為:', result);
    //     this.cs.addCustomer(result);
    //   }
    // );
  }
  // 編輯一筆客戶資料
  editCustomer(c: CustomerId) {
    this.openModal(c);
  }

  // 刪除一筆客戶資料
  deleteCustomer(c: CustomerId) {
    const cmref = this.modal.open(ConfirmModalComponent, {
      size: 'lg'
    });
    // 將想刪除的資料傳到彈跳視窗裡面
    cmref.componentInstance.data = c;
    cmref.result
      // 正常回來的情況
      .then(
        (result) => {
          // 刪除資料
          this.cs.removeCustomer(c.id);
        }
      )
      // 異常的情況
      .catch(
        (reason) => {
          console.log('Cancel原因', reason);
        });
  }

}
