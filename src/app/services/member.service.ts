import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Member, MemberId } from '../models/member';


@Injectable({
  providedIn: 'root'
})

export class MemberService {
  memberRef: AngularFirestoreCollection<Member>; // DB參照點
  Members: Observable<MemberId[]> | undefined;    // 動態資料流(供訂閱)
  fake_cid = 1;

  constructor(private db: AngularFirestore) {
    // 設定資料庫集合參照點
    this.memberRef = this.db.collection<Member>('members');
  }
  // 新增一筆會員資料
  addMember(member: Member): Promise<any> {
    member.member_id = 'C' + ('0000' + this.fake_cid).slice(-4);
    this.fake_cid++;
    return this.memberRef.add(member);
  }
  // 刪除一筆會員資料
  removeMember(id: string): Promise<any> {
    // 不可回復的行為
    const docRef: AngularFirestoreDocument = this.db.doc<Member>(`members/${id}`);
    return docRef.delete();
    // 通常會給一個欄位放置帳號的狀態，需要刪除就是會改變帳號的狀態。
  }
  // 修改一筆會員資料
  // 針對文件跟層級來做修改
  updateMember(id: string, data: Member): Promise<any> {
    const docRef: AngularFirestoreDocument
      = this.db.doc<Member>(`members/${id}`);
    return docRef.set(data, { merge: true });
  }
  // 取得所有會員資料
  getMembers(): Observable<MemberId[]> {
    // return this.Members = this.MemberRef.valueChanges({ idField: 'id' });
    const dref = this.db.collection<Member>('members', ref => {
      return ref.orderBy('member_id');  // 以member_id為欄位排序，預設是小排到大(asc)
    });
    return dref.valueChanges({ idField: 'id' });
  }
}
