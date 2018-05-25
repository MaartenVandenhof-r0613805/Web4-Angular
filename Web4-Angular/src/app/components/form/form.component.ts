import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  test = 'Dit is een test';
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  onClick() {
    console.log('testestsetsetsets');
    this.dataService.createPost();
  }
}
