import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user = 'Roma';
  balance = 'Р 0,00';
  imgUrl = 'assets/img/english.svg';
  menu = [
    { name: 'Home', link: '' },
    { name: 'PLAY ALL lottery', link: '' },
    { name: 'LOTTERY GROUPS', link: '' },
    { name: 'Promotions', link: '' },
  ];
  icon = [
    { img: 'assets/img/facebook.svg', link: '' },
    { img: 'assets/img/twitter.svg', link: '' },
    { img: 'assets/img/facebook-messenger.svg', link: '' },
    { img: 'assets/img/whatsapp.svg', link: '' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
