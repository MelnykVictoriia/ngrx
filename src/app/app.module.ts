import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';


/**
 * components
 */

import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { VoteListComponent } from './vote-list/vote-list.component';
import { PointsComponent } from './points/points.component';

import { reducers } from './redux/reducer/index';

const components = [
  AppComponent,
  AddArticleComponent,
  ArticleListComponent,
  ArticleComponent,
  VoteListComponent,
  PointsComponent
]

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  declarations: components,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
