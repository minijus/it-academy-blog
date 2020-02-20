import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Author } from "../shared/author";
import { AuthorsService } from "../services/authors.service";

@Component({
  selector: "app-authors-page",
  templateUrl: "./authors-page.component.html",
  styleUrls: ["./authors-page.component.scss"]
})
export class AuthorsPageComponent implements OnInit {
  authors$: Observable<Author[]>;
  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {
    this.authors$ = this.authorsService.getAuthors();
  }
}
