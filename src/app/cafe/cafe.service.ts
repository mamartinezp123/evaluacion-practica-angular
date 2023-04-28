import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CafeService {
  constructor(private httpClient: HttpClient) {}
  getCafes(): Observable<Cafe[]> {
    return this.httpClient.get<Cafe[]>(environment.baseUrl);
  }
}
