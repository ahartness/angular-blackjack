import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './main/board.component';
import { CardDataService } from './services/card-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, BoardComponent],
  providers: [CardDataService],
})
export class AppComponent {
  title = 'angular-blackjack';
}
