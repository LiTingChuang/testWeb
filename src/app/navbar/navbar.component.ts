import { Component, OnInit } from '@angular/core';

export interface Menu {
  href: string ;
  name: string ;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  title = '多多教教主: 多多 ♫ ～';
  // menu: Menu[] = [
  //   { href: './jumbo.component.css', name: '首頁' },
  //   { href: './product.component.css', name: '基本資料' },
  //   { href: './hero.component.css', name: '寫真專區' },
  //   { href: './feature.component.css', name: '生活點滴' },
  // ];
  logo = '/assets/images/dogLogo.png';
  // 加入段落id
  menu = [
  { title: "首頁", url: "#"},
  { title: "基本資料", url: '#product-section'},
  { title: "寫真專區", url: '#hero-section'},
  { title: "生活點滴", url: '#feature-section'}
];

  constructor() { }
  // 元件執行的涵式
  ngOnInit(): void {
  }

}
