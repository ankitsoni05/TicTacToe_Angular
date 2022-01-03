import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
import { PlayerRegisterationComponent } from './player-registeration/player-registeration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GameBoardComponent } from './game-board/game-board.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerRegisterationComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRippleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
