export interface Member {
  member_id: string;
  name: string;
  level: string;
  // ? = 非必填欄位
  intro?: string;
  bitrh: {
    year: number;
    month: number;
    day: number;
  };
}

// 增加firestore特有的"亂數id"欄位
export interface MemberId extends Member {
  id: string;
}