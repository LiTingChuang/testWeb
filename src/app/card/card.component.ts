import { Component, OnInit } from '@angular/core';

export interface Card {
  name: string;
  intro: string;
  img: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card[] = [
    { name: '找叔叔阿姨玩被欺負的多', intro: '媽麻救我....ＱＱ', img: '/assets/images/dodoQQ.JPG' },
    { name: '給叔叔阿姨照顧被抓腳的多', intro: '人家已經很想睡覺了，媽麻ＱＱ', img: '/assets/images/dodoLeg.JPG' },
    { name: '坐等爸拔回家孵無臉男的多', intro: '你看看我很厲害吧！再給我10年我就可以孵出個無臉男唷', img: '/assets/images/dodoegg.JPG' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
