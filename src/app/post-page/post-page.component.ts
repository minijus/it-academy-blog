import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "../services/posts.service";
import { Post } from "../shared/post";

@Component({
  selector: "app-post-page",
  templateUrl: "./post-page.component.html",
  styleUrls: ["./post-page.component.scss"]
})
export class PostPageComponent implements OnInit {
  public post: Post;
  public postContent: string[];
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postsService.getPost({ id: params.get("id") }).then(post => {
        this.post = post;
        this.postContent = this.post.content.split("\n");
      });
    });
  }
}
