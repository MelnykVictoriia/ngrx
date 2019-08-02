import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent implements OnInit {

  @Input() points: number
  @Output() upvote = new EventEmitter()
  @Output() downvote = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  upVoteArticle = () => {
    this.upvote.emit()
  }

  downVoteArticle = () => {
    this.downvote.emit()
  }

}