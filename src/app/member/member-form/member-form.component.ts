import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Member, MemberId } from 'src/app/models/member';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  @Input() cdoc: MemberId | undefined;
  // 通用格式
  // @Output() result: EventEmitter = new EventEmitter();
  @Output() result: EventEmitter<Member> = new EventEmitter<Member>();


  member: Member = {  // 儲存表單各位欄位的資料,供表單ngModel使用
    name: '',
    bitrh: { day: 0, month: 0, year: 0 },
    level: '',
    intro: '',
    member_id: ''
  };

  constructor(public active: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.cdoc) {
      this.member = {
        name: this.cdoc.name,
        bitrh: this.cdoc.bitrh,
        level: this.cdoc.level,
        intro: this.cdoc.intro,
        member_id: this.cdoc.member_id
      };
    }
  }

  save() {
    // 發佈資料，訂閱者可收到通知
    this.result.emit(this.member);
    // 關閉視窗,回傳訊息'儲存'
    this.active.close('儲存');
  }
}
