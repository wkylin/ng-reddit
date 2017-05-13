import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

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
    
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    
    voteUp(): void {
        this.votes += 1;
    }
    
    voteDown(): void {
        this.votes -= 1;
    }
    
    domain(): string {
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}
