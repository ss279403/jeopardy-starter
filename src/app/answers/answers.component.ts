import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {


  savedAnswer: string;

  @Output() buttonClicked = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }


  submitAnswer() {
    this.buttonClicked.emit(this.savedAnswer);
    this.savedAnswer="";
  }


}
