import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";
import { Post } from "../shared/post";

@Component({
  selector: "app-recent-posts",
  templateUrl: "./recent-posts.component.html",
  styleUrls: ["./recent-posts.component.scss"]
})
export class RecentPostsComponent implements OnInit {
  public posts: Post[];
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts().slice(0, 3);
  }
}
