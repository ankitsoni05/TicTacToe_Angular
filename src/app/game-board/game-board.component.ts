import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  @Input('playerInfo') playerInfo : any;

  rows = [1,2,3];
  cols = [1,2,3];
  SuccessCombo = [[11,12,13],[21,22,23],[31,32,33],[11,21,31],[12,22,32],[13,23,33],[11,22,33],[13,22,31]];
  player1Selection :any[] = [];
  player2Selection : any[] = [];
  
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.playerInfo);
  }
 

  chancePlay(row:any,col:any){
    debugger;
    this.player1Selection.push(parseInt(row+''+col));
    this.SuccessCombo.forEach(suc=>{
      let length = suc.length;
      let coll : any[] = [];
      suc.forEach(s=>{
        if(this.player1Selection.indexOf(s)>=0){
          coll.push(s);
        }
      })
      if(coll.length == length)
      {
        console.log(coll);
      }
    })
  }
}
