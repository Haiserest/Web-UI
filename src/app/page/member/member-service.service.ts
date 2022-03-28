import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mem } from './member-data';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  constructor(private http: HttpClient) { }

  getMember(): Observable<mem>{
    return this.http.get<mem>('https://www.mecallapi.com/api/users');
  }
}
