import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input() questionInfo;
  savedAnswer: string;
  score: number = 0;

  @Output() buttonClicked = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }



  isCorrect(): void {
    if (this.savedAnswer.toLowerCase() == this.questionInfo.answer.toLowerCase()) {
      this.score += this.questionInfo.value;
      alert("that is correct");
    } else {
      this.score -= this.questionInfo.value;
      alert("that is wrong!")
    }
    this.buttonClicked.emit();
    this.savedAnswer = "";
  }
  
}
