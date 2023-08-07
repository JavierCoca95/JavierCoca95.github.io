import { Component} from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http';
import { EventEmitter, Input, Output } from '@angular/core';
import { catchError, last, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FileUploadModel } from 'src/app/modules/home/models/file.model';
import { trigger, state, style, animate, transition } from '@angular/animations';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 100 })),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FormComponent {
  srcResult: any;
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
  @Input() text = 'Subir archivo';
  @Input() param = 'file';
  @Input() target = 'https://file.io';
  @Input() accept = 'image/*';
  @Output() complete = new EventEmitter<string>();
  fileInformation: any;
  files: Array<FileUploadModel> = [];

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

/*   onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;

    fileUpload.onchange = () => {
      if (fileUpload.files){
        for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({
          data: file,
          state: 'in',
          inProgress: false,
          progress: 0,
          canRetry: false,
          canCancel: true
        });
      }
      }
      

      this.uploadFiles();
    };

    fileUpload.click();
  }

  cancelFile(file: FileUploadModel) {
    file.sub?.unsubscribe();

    this.removeFileFromArray(file);
  }

  retryFile(file: FileUploadModel) {
    this.uploadFile(file);

    file.canRetry = false;
  }

  private uploadFile(file: FileUploadModel) {
    const fd = new FormData();
    fd.append(this.param, file.data);

    const req = new HttpRequest('POST', this.target, fd, {
      reportProgress: true
    });

    file.inProgress = true;
    file.sub = this._http.request(req).pipe(
      map(event => {
        let responseEvent = null;
        switch (event.type) {
              case HttpEventType.UploadProgress:
                if (event.total) {
                   file.progress = Math.round(event.loaded * 100 / event.total);
                }break;
              case HttpEventType.Response:
                responseEvent = event;
                break;
        }
        return responseEvent;
      }),
      //tap(message => { }),
      last(),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        file.canRetry = true;
        return of(`${file.data.name} upload failed.`);
      })
    ).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.removeFileFromArray(file);
          console.log('Respuesta del servidor:', event.body);
          this.complete.emit(event.body);
        }
      }
    );
  }

  private uploadFiles() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.value = '';

    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  private removeFileFromArray(file: FileUploadModel) {
    const index = this.files.indexOf(file);

    if (index > -1) {
      this.files.splice(index, 1);
    }
  }
 */
  URL : any;

  useImage(event : any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
    
      reader.readAsDataURL(event.target.files[0]); // Read file as data url
      reader.onloadend = (e) => { // function call once readAsDataUrl is completed
        if (e.target && e.target['result']){
           this.URL = e.target['result']; // Set image in element
        }
      };
    }
  }
  openImageCapturer() {
    const inputElement: HTMLInputElement | null = document.querySelector('#imageCapturer');
    if (inputElement) {
      inputElement.click();
    }
  }

  //private _changeDetection: any;

}
