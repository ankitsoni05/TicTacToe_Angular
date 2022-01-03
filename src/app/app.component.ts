import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicTacToe';
  gameStarted: boolean = false;
  playerInformation : any;

  StartGame(event: any) {
    this.playerInformation = event;
    if (event)
      this.gameStarted = event;
  }
}
