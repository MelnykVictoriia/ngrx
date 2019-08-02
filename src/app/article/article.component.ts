import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleState } from '../redux/reducer/article';
import { incrementArticlePointAction, decrementArticlePointAction } from '../redux/actions/articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public id : number = 0;
  @Input() article: any;

  constructor(private store: Store<ArticleState>) { }

  ngOnInit() {
  }

  upvote() {
    this.store.dispatch(incrementArticlePointAction(this.article))
  }

  downvote() {
    this.store.dispatch(decrementArticlePointAction(this.article))
  }

}