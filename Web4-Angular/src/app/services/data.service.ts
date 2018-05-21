import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/internal/operators';
import {st} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: Http) {
    console.log('Dataservice connecte');
  }

  getPost() {
    return this.http.get('http://localhost:8080/Controller?action=GetUsers').pipe(map(res => res.json()));
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

interface Post {
  userId: string;
  firstName: string;
  lastName: string;
  password: string;
}
