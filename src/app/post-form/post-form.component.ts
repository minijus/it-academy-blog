import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor() { }
  post: Post;

  ngOnInit(): void {
    this.post = { author: '', content: '', email: ''};
  }

}
