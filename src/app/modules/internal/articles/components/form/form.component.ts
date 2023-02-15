import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { FormBuilder } from '@angular/forms';

import { FormService } from 'src/app/services/form/form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class ArticleForm {
  constructor(
    public dialogRef: MatDialogRef<ArticleForm>,
    private articlesService: ArticlesService,
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {}

  @Output() getData = new EventEmitter()
  form = this.formBuilder.nonNullable.group({
    description: [''],
    price: [''],
    stock: [''],
  });

  close(){
    this.dialogRef.close();
  }

  submit(){
    this.articlesService.createArticle(this.form.getRawValue())
    .subscribe( {
      next: response => {
        this.close();
        this.getData.emit()
      },
      error: error => {
        this.form = this.formService.setErrors(this.form, error)
      }
    })
  }

}
