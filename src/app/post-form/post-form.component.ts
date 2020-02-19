import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor(private postsService: PostsService) { }
  post: Post;
  serverErrorMessage: string;

  ngOnInit(): void {
    this.post = { author: '', content: '', email: '', title: '' };
  }

  onSubmit() {
    this.postsService.addPost(this.post).subscribe(() => {
      this.post = { author: '', content: '', email: '', title: '' };
      this.serverErrorMessage = '';
    },
      error => this.serverErrorMessage = error
    );
  }

}
