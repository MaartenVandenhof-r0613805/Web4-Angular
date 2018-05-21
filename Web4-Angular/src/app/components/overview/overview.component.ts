import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  posts: Post[];


  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getPost().subscribe((data) => {
      this.posts = data;
    });
  }

}

interface Post {
  firstName: string;
  userId: string;
  role: string;
}
