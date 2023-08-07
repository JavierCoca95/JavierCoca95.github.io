import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeRoutingModule } from './practice-routing.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';








@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    PracticeRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ]
})
export class PracticeModule { }
