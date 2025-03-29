import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NuevasPublisService } from '../../services/nuevas-publis.service';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  nuevasPublisService = inject(NuevasPublisService)

  router = inject(Router)

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      titulo: new FormControl('', [Validators.required, Validators.minLength(3)]),
      texto: new FormControl('', [Validators.required, Validators.maxLength(500), Validators.minLength(100)]),
      autor: new FormControl('', Validators.required),
      imagen: new FormControl('', [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i)]),
      fecha: new FormControl(null, Validators.required),
      categoria: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value
      console.log('Formulario enviado correctamente', formData)
      this.nuevasPublisService.addPost(formData);
      this.router.navigate(['/post']);
    } else {
      this.form.markAllAsTouched()
    }
  }

  checkError(field: string, validator: string): boolean | undefined {
    return this.form.get(field)?.hasError(validator) && this.form.get(field)?.touched;
  }
}