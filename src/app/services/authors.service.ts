import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../shared/post";
import { Author } from "../shared/author";

@Injectable({
  providedIn: "root"
})
export class AuthorsService {
  constructor(private httpClient: HttpClient) {}
  getAuthors() {
    return this.httpClient.get<Author[]>(`/api/authors`);
  }
  getAuthor({ id }) {
    return this.httpClient.get<Author>(`/api/authors/${id}`);
  }
  getAuthorPosts({ id }) {
    return this.httpClient.get<Post[]>(`/api/authors/${id}/posts`);
  }
}
