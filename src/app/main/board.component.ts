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
  winnerText = '';
  availableCards = this.cardDataService.availableCards;
  gameActive = this.cardDataService.gameActive;

  constructor(public cardDataService: CardDataService) {}

  dealCards() {
    this.winnerText = '';
    this.userCards = [];
    this.dealerCards = [];
    console.log(this.cardDataService.availableCards.length);
    this.gameActive = true;
    if (this.cardDataService.availableCards.length > 10) {
      this.cardDataService.newHand();
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
    if (this.cardDataService.userScore > 21) {
      this.winnerText = 'Dealer Wins!';
      this.gameActive = false;
      this.availableCards = this.cardDataService.availableCards;
    }
  }

  stand() {
    while(this.cardDataService.dealerScore < 17) this.dealerCards.push(this.cardDataService.getRandomCard('dealer'));
    if(this.cardDataService.dealerScore > 21 || this.cardDataService.dealerScore < this.cardDataService.userScore){
      this.winnerText = 'You Win!';
    } else if (this.cardDataService.dealerScore > this.cardDataService.userScore) {
      this.winnerText = 'Dealer Wins!';
    } else if (this.cardDataService.dealerScore === this.cardDataService.userScore) {
      this.winnerText = 'Push!';
      
    }
    this.gameActive = false;
    this.availableCards = this.cardDataService.availableCards;
  }

  reset() {
    this.winnerText = '';
    this.cardDataService.reset();
    this.userCards = [];
    this.dealerCards = [];
    this.gameActive = false;
    this.availableCards = this.cardDataService.availableCards;
  }
}
