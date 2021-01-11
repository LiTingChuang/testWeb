import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Customer, CustomerId } from 'src/app/models/customer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})

export class CustomerFormComponent implements OnInit {
  @Input() cdoc: CustomerId | undefined;
  // 通用格式
  // @Output() result: EventEmitter = new EventEmitter();
  @Output() result: EventEmitter<Customer> = new EventEmitter<Customer>();

  customer: Customer = {  // 儲存表單各位欄位的資料,供表單ngModel使用
    name: '',
    date_init_contact: { day: 0, month: 0, year: 0 },
    cell_phone: '',
    background_info: '',
    customer_id: ''
  };

  constructor(public active: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.cdoc) {
      this.customer = {
        name: this.cdoc.name,
        date_init_contact: this.cdoc.date_init_contact,
        cell_phone: this.cdoc.cell_phone,
        background_info: this.cdoc.background_info,
        customer_id: this.cdoc.customer_id
      };
    }
  }

  save() {
    // 發佈資料，訂閱者可收到通知
    this.result.emit(this.customer);
    // 關閉視窗,回傳訊息'儲存'
    this.active.close('儲存');
  }
}
