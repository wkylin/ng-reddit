import {Component, OnInit} from '@angular/core';
import {ArticleModule} from './article.module';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
/*  votes: number;
  title: string;
  link: string;*/
  article: ArticleModule;
  constructor() {
    /*this.title = 'Angular 2';
    this.link = 'Http://angular.io';
    this.votes = 10;*/
    this.article = new ArticleModule('Angular 2', 'http://angular.io', 10);
  }
  voteUp(): boolean {
    // this.votes += 1;
    this.article.votes += 1;
    return false;
  }
  voteDown(): boolean {
    // this.votes -= 1;
    this.article.votes -= 1;
    return false;
  }
  ngOnInit() {
  }
}
