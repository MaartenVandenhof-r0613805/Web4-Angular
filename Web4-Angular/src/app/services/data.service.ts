import { Injectable } from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {person} from '../components/classes/person';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {
    console.log('Dataservice connected');
  }

  getPost(): Observable<person[]> {
    console.log('Dit is een test ');
    return this.http.get<person[]>('http://localhost:8080/Controller?action=GetUsers');
  }

  createPost() {
    const data =  {
      userId: 'Test@Test.be',
    firstName: 'Test',
    lastName: 'Test',
    password: 'Test'
    };
    return this.http.post('http://localhost:8080/Controller?action=Register', data);
  }

}
