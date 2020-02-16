import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";
import { Post } from "../shared/post";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-recent-posts",
  templateUrl: "./recent-posts.component.html",
  styleUrls: ["./recent-posts.component.scss"]
})
export class RecentPostsComponent implements OnInit {
  public posts$: Observable<Post[]>;
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts$ = this.postsService
      .getPosts()
      .pipe(map(posts => posts.slice(0, 3)));
  }
}
