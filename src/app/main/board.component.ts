import { Component } from '@angular/core';
import { CardDataService } from '../services/card-data.service';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  randomCard!: string;
  userCards: string[] = [];
  dealerCards: string[] = [];
  availableCards = this.cardDataService.availableCards;

  constructor(private cardDataService: CardDataService) {}

  dealCards() {
    this.userCards = [];
    this.dealerCards = [];
    console.log(this.cardDataService.availableCards.length);
    if (this.cardDataService.availableCards.length > 10) {
      this.userCards.push(this.cardDataService.getRandomCard('user'));
      this.dealerCards.push(this.cardDataService.getRandomCard('dealer'));
      this.userCards.push(this.cardDataService.getRandomCard('user'));
    } else {
      this.cardDataService.reset();
      this.availableCards = this.cardDataService.availableCards;
      this.dealCards();
    }
  }

  showRandomCard() {
    this.randomCard = this.cardDataService.getRandomCard('user');
  }
}
