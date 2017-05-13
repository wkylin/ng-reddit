import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ArticleModule {
  title: string;
  link: string;
  votes: number;
  constructor(title: string, link: string, votes?: number){
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
}
