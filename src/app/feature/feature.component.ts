import { Component, OnInit } from '@angular/core';

// 定義類別屬性
export interface Food{
  name: string ;
  intro: string ;
  img: string ;
}

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  food: Food[] = [
    {name : '第一次跟父母分開三天得到禮物的多', intro: '得到一個戴起來像柴柴ㄉ項圈', img : '/assets/images/dodo.JPG'},
    {name : '跟媽麻出門買早餐欣賞風景也被欣賞的多', intro: '背後看起來很像絨毛娃娃真的好可愛', img : '/assets/images/backofdodo.JPG'},
    {name : '獲得媽麻的冬天坐車禮物的睡衣多', intro: '其實是衣服可是真的太像睡衣了QQ', img : '/assets/images/dodo_pajamas.JPG'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

  // // 控制按鈕按下去之後會發生甚麼事
  // onSelect(obj) {
  //   console.log(obj);
  // }

}
