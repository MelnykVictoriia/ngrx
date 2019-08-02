import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  @Output() addArticle = new EventEmitter();

  addLinkForm = this.fb.group(
    {
      title: ['', Validators.required],
      article: ['', Validators.required]
    }
  );
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  onFormSubmit() {
    console.log('this.addLinkForm.', this.addLinkForm);
    return this.addArticle.emit({
      title: this.addLinkForm.controls['title'].value,
      article: this.addLinkForm.controls['article'].value
    });
  }

}