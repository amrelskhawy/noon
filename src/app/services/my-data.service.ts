import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  config : {} = {
    headers: {
      "lang" : "en"
    },
    "googleId" : "ChIJ88rv8bI_WBQRkvVBLDeZQUg"
  }

  constructor(private http: HttpClient) { }

  getOffersData() {

    return this.http.post('https://satatechnologygroup.net:3301/api/MobileMainPage/GetHomePage', this.config )
  }

  getCategoriesData() {
    return this.http.get('https://satatechnologygroup.net:3301/api/Categories/index')
  }

}
