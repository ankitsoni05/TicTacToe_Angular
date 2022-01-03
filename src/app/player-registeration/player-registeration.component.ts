import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-registeration',
  templateUrl: './player-registeration.component.html',
  styleUrls: ['./player-registeration.component.css']
})
export class PlayerRegisterationComponent implements OnInit {

  @Output("StartGame") startGameEmitter = new EventEmitter();

  playerRegForm = new FormGroup({
    Player1 : new FormControl('',Validators.required),
    Player2 : new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.playerRegForm);
    this.startGameEmitter.emit(this.playerRegForm.value);
  }

  get Player1()
  {
    return this.playerRegForm.get("Player1");
  }
  get Player2()
  {
    return this.playerRegForm.get("Player2");
  }

}
