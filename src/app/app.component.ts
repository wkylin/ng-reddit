import {Component} from '@angular/core';
import {ArticleModule} from './article/article.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: ArticleModule[];

  constructor() {
    this.articles = [
        new ArticleModule('Angular 2', 'http://angular.io', 10),
        new ArticleModule('Fullstack', 'http://fullstack.io', 12),
        new ArticleModule('Angular Homepage', 'http://angular.io', 16)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new ArticleModule(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): ArticleModule[] {
    return this.articles.sort((a: ArticleModule, b: ArticleModule) => b.votes - a.votes);
  }
}
