import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberId, Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';
import { MemberFormComponent } from '../member-form/member-form.component';
import { Aa070312ConfirmModalComponent } from 'src/app/modal/aa070312-confirm-modal/aa070312-confirm-modal.component';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {
  members: Observable<MemberId[]> | undefined; // 所有客戶的資料流
  subscription: any;
  edit: boolean | undefined;

  constructor(private cs: MemberService,
    public modal: NgbModal) { }

  ngOnInit() {
    this.members = this.cs.getMembers(); // 取得所有客戶的資料流
  }
  // open(): 開啟Modal視窗
  // 彈出視窗: 新增一筆客戶資料
  openModal(cdoc?: MemberId) {
    const modalRef = this.modal.open(MemberFormComponent, {
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
      (result: Member) => {
        // && 前後兩個條件要成立才可以執行
        if (this.edit && cdoc) {
          this.cs.updateMember(cdoc.id, result);
        } else {
          this.cs.addMember(result);
        }
      }
    );

    // 
    // modalRef.componentInstance.result.subscribe(
    //   (result: Member) => {
    //     console.log('表單輸入的資料為:', result);
    //     this.cs.addMember(result);
    //   }
    // );
  }
  // 編輯一筆客戶資料
  editMember(m: MemberId) {
    this.openModal(m);
  }

  // 刪除一筆客戶資料
  deleteMember(m: MemberId) {
    const cmref = this.modal.open(Aa070312ConfirmModalComponent, {
      size: 'lg'
    });
    // 將想刪除的資料傳到彈跳視窗裡面
    cmref.componentInstance.data = m;
    cmref.result
      // 正常回來的情況
      .then(
        result => {
          // 刪除資料
          this.cs.removeMember(m.id);
        }
      )
      // 異常的情況
      .catch(
        (reason) => {
          console.log('Cancel原因', reason);
        });
  }

}
