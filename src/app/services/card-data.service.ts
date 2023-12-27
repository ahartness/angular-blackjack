export class CardDataService {
  allCards = [
    '2C',
    '2D',
    '2H',
    '2S',
    '3C',
    '3D',
    '3H',
    '3S',
    '4C',
    '4D',
    '4H',
    '4S',
    '5C',
    '5D',
    '5H',
    '5S',
    '6C',
    '6D',
    '6H',
    '6S',
    '7C',
    '7D',
    '7H',
    '7S',
    '8C',
    '8D',
    '8H',
    '8S',
    '9C',
    '9D',
    '9H',
    '9S',
    '10C',
    '10D',
    '10H',
    '10S',
    'JC',
    'JD',
    'JH',
    'JS',
    'QC',
    'QD',
    'QH',
    'QS',
    'KC',
    'KD',
    'KH',
    'KS',
    'AC',
    'AD',
    'AH',
    'AS',
  ];

  gameActive = false;
  userCards: string[] = [];
  dealerCards: string[] = [];
  userScore = 0;
  dealerScore = 0;
  availableCards: string[] = [];

  reset() {
    this.userCards = [];
    this.dealerCards = [];
    this.userScore = 0;
    this.dealerScore = 0;
    this.availableCards = [...this.allCards];
    this.gameActive = false;
  }

  newHand() {
    this.userCards = [];
    this.dealerCards = [];
    this.userScore = 0;
    this.dealerScore = 0;
    this.gameActive = true;
  }

  constructor() {
    this.availableCards = [...this.allCards];
  }

  getRandomCard(playerId: any) {
    const randomIndex = Math.floor(Math.random() * this.availableCards.length);
    const card = this.availableCards[randomIndex];
    this.availableCards.splice(randomIndex, 1);
    let cardValue: number = this.getCardValue(card, playerId);
    console.log(this.availableCards.length + ' cards left');
    if (playerId === 'user') {
      this.userCards.push(card);
      this.userScore += cardValue;
    } else {
      this.dealerCards.push(card);
      this.dealerScore += cardValue;
    }

    return card;
  }

  getCardValue(card: string, playerId: string): number {
    let score = 0;
    score = playerId === 'user' ? this.userScore : this.dealerScore;
    let playerCard = card.length === 3 ? card.slice(0, 2) : card.slice(0, 1);
    if (playerCard === 'A') {
      if (score + 11 > 21) {
        return 1;
      } else {
        return 11;
      }
    } else if (playerCard === 'J' || playerCard === 'Q' || playerCard === 'K') {
      return 10;
    } else {
      return parseInt(playerCard);
    }
  }

  getCardScore(cards: string[]): any {
    if (cards.length === 0) return 0;
    const firstCard = this.userCards.pop();
    const card = firstCard?.slice(0, 1);
    console.log('holder', firstCard, card);
    console.log('player card', this.userCards);
    if (card === 'A') {
      return 11 + this.getCardScore(this.userCards);
    } else if (card === 'J' || card === 'Q' || card === 'K') {
      return 10 + this.getCardScore(this.userCards);
    } else {
      return (
        parseInt(card?.toString() || '') + this.getCardScore(this.userCards)
      );
    }
  }
}
