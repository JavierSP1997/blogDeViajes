import { Component } from '@angular/core';
import { FormControl, PatternValidator, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      titulo: new FormControl('', [Validators.required, Validators.minLength(3)]),
      texto: new FormControl('', [Validators.required, Validators.maxLength(500), Validators.minLength(140)]),
      autor: new FormControl('', Validators.required),
      imagen: new FormControl('', [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i)]),
      fecha: new FormControl(null, Validators.required),
      categoria: new FormControl('', Validators.required)
    });
  }
  onSubmit() { }

  checkError(field: string, validator: string): boolean | undefined {
    return this.form.get(field)?.hasError(validator) && this.form.get(field)?.touched;
  }
}