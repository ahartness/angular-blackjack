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
  userScore = this.cardDataService.userScore;
  dealerScore = this.cardDataService.dealerScore;
  availableCards = this.cardDataService.availableCards;
  gameActive = this.cardDataService.gameActive;

  constructor(private cardDataService: CardDataService) {}

  dealCards() {
    this.userCards = [];
    this.dealerCards = [];
    console.log(this.cardDataService.availableCards.length);
    this.gameActive = true;
    if (this.cardDataService.availableCards.length > 10) {
      this.userCards.push(this.cardDataService.getRandomCard('user'));
      this.dealerCards.push(this.cardDataService.getRandomCard('dealer'));
      this.userCards.push(this.cardDataService.getRandomCard('user'));

    } else {
      this.cardDataService.reset();
      this.gameActive = false;
      this.availableCards = this.cardDataService.availableCards;
      this.dealCards();
    }
  }

  hit() {
    this.userCards.push(this.cardDataService.getRandomCard('user'));
    console.log('on hit', this.userCards);
    if (this.userScore > 21) {
      this.cardDataService.reset();
      this.gameActive = false;
      this.availableCards = this.cardDataService.availableCards;
    }
  }

  stand() {}
}
