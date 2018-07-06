import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class DataService {
  questions:Question[];
  constructor() { 
    /*this.questions = [
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
    ];*/
  }
  //get question from LS
  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }
      else {
          this.questions = JSON.parse(localStorage.getItem('questions'));
      }
    return this.questions;
  }
  //add question to ls
  addQuestion(question:Question){
    this.questions.unshift(question);

    //init local variable
    let questions;
    if(localStorage.getItem('questions') === null){
      questions = [];
      //push new question
      questions.unshift(question);
      // set new array to ls
      localStorage.setItem('questions', JSON.stringify(questions));
    }
      else {
        questions = JSON.parse(localStorage.getItem('questions'));
        //add new question
        questions.unshift(question);
        // Re set LS
        localStorage.setItem('questions',JSON.stringify(questions));
      }

  }
  //remove question from ls
  removeQuestion(question:Question){
    for(let i = 0;i < this.questions.length;i++){
      if(question == this.questions[i]){
        this.questions.splice(i,1);
        localStorage.setItem('questions',JSON.stringify(this.questions));
      }
    }
  }

}
