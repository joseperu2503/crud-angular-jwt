import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  setErrors(form: FormGroup, error: any){
    form.markAllAsTouched()
    let errors = error.error.errors
    Object.keys(form.controls).forEach((key: any) => {
      if(errors[key]){
        form.get(key)?.setErrors({invalid: errors[key][0]})
      }
    });

    return form
  }
}
