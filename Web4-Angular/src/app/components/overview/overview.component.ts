import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {person} from '../classes/person';
import {timer} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  posts: person[];


  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    timer(0, 2500).subscribe(() => {
      this.dataService.getPost().subscribe(data => this.posts = data);
    });

  }

}

