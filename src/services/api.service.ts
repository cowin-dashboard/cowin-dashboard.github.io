import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url =
    'https://cdn-api.co-vin.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=';

  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }

  saveUser(data: any) {
    return this.http.post(this.url, data);
  }
}
