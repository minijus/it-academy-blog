import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../post.service";
import { Post } from "../shared/post";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"]
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  postList: Post[];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get("id");
    this.postService.getPost(postId).then(post => {
      this.post = post;
    });
  }
}
