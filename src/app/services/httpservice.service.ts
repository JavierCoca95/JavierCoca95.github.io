import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  API_KEY = '066d81b070a648d7aad7f7941f2a3de4';

  constructor(private httpClient: HttpClient) {}

  getdata() {
    return this.httpClient.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2023-07-15&sortBy=publishedAt&apiKey=${this.API_KEY}`
    );
  }
}
