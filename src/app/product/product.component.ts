import { Component, OnInit } from '@angular/core';

export interface Product {
  img: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products: Product[] = [
    { img: '/assets/images/production1.png', title: '多・品種', desc: '初估為在台灣稀有少見的黑四目博美，不過因為她長的非常健壯，所以不排除有狐狸犬的基因！不過這不重要，既然要成為多多教的成員，就只需要喜歡教主就好了！' },
    { img: '/assets/images/production2.png', title: '多・特徵', desc: '黑白黃配色；小眉毛；穿襪子（原生毛色）；QQ尾巴；舌頭總是在外面；喜歡人；怕動物；膽小狗；軟毛耳朵；最重要的是她是可愛小女生♡♡♡' },
    { img: '/assets/images/production3.png', title: '多・奴才', desc: '養育教主的爸爸媽媽＆爸爸媽媽的親友團（大約人數目前有：15人），希望有更多人加入多多教，來一起見證教主從小不隆咚的樣子茁壯與成長。' },
    { img: '/assets/images/production4.png', title: '多・關注', desc: '覺得這裡不夠的話，可以下載「Instagram」，並查詢多多教主的ID：dodo.dogdog，就可以密切關注多多教主和教主父母的生活動態唷！（下方附上QR Code）' }
  ]
  constructor() { }

  ngOnInit() {
  }
}