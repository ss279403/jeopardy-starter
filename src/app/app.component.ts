import { Component, OnInit} from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  questionInfo;
  score: number = 0;

  
  constructor(private jeopardyService: JeopardyService) { }

  getDataFromService() {
    this.jeopardyService.getQuestionInfo()
      .subscribe(
      questionInfo => {
        this.questionInfo = questionInfo[0];
      }
      )
  }

  ngOnInit() {
    this.getDataFromService()
  }


  isCorrect(savedAnswer: string) {
    if (savedAnswer == this.questionInfo.answer) {
      this.score += this.questionInfo.value;
      alert("that is correct");
    } else {
      this.score -= this.questionInfo.value;
      alert("that is wrong!")
    }
    this.getDataFromService();
  }


}


