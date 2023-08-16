import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  [x: string]: any;

  articles1: any;

  cities: any;

  roles = [
    { id: 1, title: 'developer' },
    { id: 2, title: 'recruiter' },
  ];

  constructor(private fb: FormBuilder, private httpservice: HttpService) {}

  ngOnInit(): void {
    this.httpservice.getdata().subscribe((response) => {
      if ('articles' in response) {
        console.log(response);
        this.articles1 = response['articles'];
        console.log(this.articles1);
      } else console.log('error');
    });

    const { roleId, autor } = this.practiceForm.controls;

    roleId.valueChanges.subscribe((response: any) => {
      if (response === 1) {
        autor.disable();
        autor.setValue(null);
      } else {
        autor.enable();
      }
    });
  }

  practiceForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    roleId: ['', Validators.required],
    autor: [{ disabled: true }, Validators.required],
  });

  isControlValid(selection: string) {
    const isvalid = this.practiceForm.get(selection);
    return isvalid?.invalid && (isvalid.dirty || isvalid.touched);
  }

  onSubmit() {
    if (this.practiceForm.valid) {
      console.log('se ha enviado al back', this.practiceForm.value);
    } else {
      console.log('el formulario tiene errores');
    }
  }
}
