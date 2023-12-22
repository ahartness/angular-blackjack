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

  constructor() {
    this.availableCards = [...this.allCards];
  }

  getRandomCard(playerId: any) {
    const randomIndex = Math.floor(Math.random() * this.availableCards.length);
    const card = this.availableCards[randomIndex];
    this.availableCards.splice(randomIndex, 1);
    console.log(this.availableCards.length + ' cards left');
    if (playerId === 'user') {
      this.userCards.push(card);
    } else {
      this.dealerCards.push(card);
    }
    return card;
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
