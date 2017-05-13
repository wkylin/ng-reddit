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
  article: ArticleModule;
  constructor() {
    this.article = new ArticleModule('Angular 2', 'http://angular.io', 10);
  }
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
  ngOnInit() {
  }
}
