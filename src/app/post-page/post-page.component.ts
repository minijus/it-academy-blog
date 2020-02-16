import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "../services/posts.service";
import { Post } from "../shared/post";
import { from, Observable } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: "app-post-page",
  templateUrl: "./post-page.component.html",
  styleUrls: ["./post-page.component.scss"]
})
export class PostPageComponent implements OnInit {
  public post$: Observable<Post>;
  public postContent: string[];
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.post$ = from(this.route.paramMap).pipe(
      switchMap(params => {
        return this.postsService.getPost({ id: params.get("id") });
      }),
      tap(post => {
        this.postContent = post.content.split("\n");
      })
    );
  }
}
