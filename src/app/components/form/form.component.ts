import { Component} from '@angular/core';
import { FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required, Validators.minLength(10)]);

  getErrorMessage() {
    if (this.email.hasError('required') && this.message.hasError('required')) {
      return 'Por favor rellene los campos';
    }
    else if (this.email.hasError('required')) {
      return 'Introduzca un email';
    }
    else if (this.message.hasError('required')) {
      return 'Introduzca un mensaje';
    }
    return this.email.hasError('email') ? 'Email no valido' : '';
  }
}
