
import { Component, OnInit } from '@angular/core';

// 用定義類別的方式固定共用的資料格式，Scenery是自己取的地方
// 類似資料庫的資料格式
export interface Scenery {
  img: string ;
  title: string ;
  desc: string ;
}


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  // 建立一個陣列[]
  scenery: Scenery[] = [
    // 需要符合上方設定的固定格式
    {img: 'assets/images/dodo&me4.JPG', title: '第一次合照', desc: '剛接回家還不熟悉媽媽的多'},
    {img: 'assets/images/dodo&me1.jpeg', title: '第二次合照', desc: '熟悉後對於拍照害羞的多'},
    {img: 'assets/images/dodo&me2.JPG', title: '第三次合照', desc: '來阿嬤家跟大家見面，熟悉後玩到很累的多'},
    {img: 'assets/images/dodo&me3.jpeg', title: '第四次合照', desc: '越長越大毛越來越多的多'},
    {img: 'assets/images/legofdodo.JPG', title: '特寫教主', desc: '可愛教主的小腳掌'},
    {img: 'assets/images/smelldodo.JPG', title: '開心教主', desc: '熟悉環境後知道有許多愛她的人的開心多'},
    {img: 'assets/images/dodocampus.JPG', title: '調皮教主', desc: '躲帳篷逃避吃飯還伸舌頭挑釁的教主多'},
    {img: 'assets/images/dodosleep.JPG', title: '睡覺教主', desc: '玩累後到哪都可以睡很熟的多'},
    {img: 'assets/images/dodohappy.jpg', title: '快樂教主', desc: '笑口常開、笑臉迎人的多'},
    {img: 'assets/images/dodosleeping.JPG', title: '撒嬌教主', desc: '喜歡一起抱抱睡覺的教主多'},
    {img: 'assets/images/dodowear.JPG', title: '時尚教主', desc: '喜歡穿衣服變成蠟筆小多的教主'},
    {img: 'assets/images/smalldodo.JPG', title: '小寶寶教主', desc: '教主還小的時候就很有教主的風範了！'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
