import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=717fe887245a49d3bf80fc48d5b58bcd')
  }
}
