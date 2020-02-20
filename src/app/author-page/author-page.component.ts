import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { AuthorsService } from "../services/authors.service";
import { Post } from "../shared/post";
import { Author } from "../shared/author";

@Component({
  selector: "app-author-page",
  templateUrl: "./author-page.component.html",
  styleUrls: ["./author-page.component.scss"]
})
export class AuthorPageComponent implements OnInit {
  author$: Observable<Author>;
  posts$: Observable<Post[]>;
  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get("id");
      this.author$ = this.authorsService.getAuthor({ id });
      this.posts$ = this.authorsService.getAuthorPosts({ id });
    });
  }
}
