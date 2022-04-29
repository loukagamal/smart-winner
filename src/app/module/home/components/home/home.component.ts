import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  card = [
    { img: 'assets/img/pick.svg', titel: 'you pick', link: 'Play Now » ', paragraph: 'It’s easy! Pick from over 40 official lottery games you wish to play. Then select your winning numbers.' },
    { img: 'assets/img/buy.svg', titel: 'we buy', link: 'More Details »', paragraph: 'Once you’ve picked your winning numbers we’ll purchase your ticket on your behalf.' },
    { img: 'assets/img/win.svg', titel: 'you win!!!', link: 'Withdraw My Winnings »', paragraph: 'When you win, we’ll automatically credit your account the full value of your winnings.' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
