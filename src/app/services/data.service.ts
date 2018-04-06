import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class DataService {
  questions:Question[];
  constructor() { 
    this.questions = [
      {
        text:'what is your name?',
        answer:'my name is archit',
        hide:true
      },
      {
        text:'what is your favorite color?',
        answer:'my fav color is black',
        hide:true
      },
      {
        text:'what is your favorite language?',
        answer:'my favorite language is javaScript',
        hide:true
      }
    ];
  }
  getQuestions(){
    return this.questions;
  }

}
