import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../shared/post";
import { PostsService } from "../services/posts.service";

@Component({
  selector: "app-most-viewed-posts",
  templateUrl: "./most-viewed-posts.component.html",
  styleUrls: ["./most-viewed-posts.component.scss"]
})
export class MostViewedPostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts$ = this.postsService.getMostViewedPosts(5);
  }
}
