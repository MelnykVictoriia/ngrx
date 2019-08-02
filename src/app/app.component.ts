import { Component, OnInit } from '@angular/core';
import { ArticleState } from './redux/reducer/article';
import { getArticles } from './redux/selectors/article.selectors';
import { addArticle } from './redux/actions/articles';
import { Article } from './classes/article';


import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  
 public id: number = 0;
 public article$: Observable<any>;

  constructor(private store: Store<ArticleState>){
    this.article$ = this.store.pipe(select(getArticles));
  }
  ngOnInit() {
    
  }
  addArticle(val: any) {
    const newArticle = new Article(++this.id, val.title, val.article, 0);
    console.log(newArticle);  
    return this.store.dispatch(addArticle(newArticle));
  }
}
