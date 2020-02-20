import { Injectable } from "@angular/core";
import { Post } from "../shared/post";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private readonly apiPath = "/api";

  constructor(private httpClient: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.apiPath}/posts`);
  }

  getRecentPosts(limit) {
    return this.httpClient.get<Post[]>(`${this.apiPath}/posts?_sort=created&_order=desc&_start=0&_limit=${limit}`);
  }

  getPost({ id }): Observable<Post> {
    return this.httpClient.get<Post>(`${this.apiPath}/posts/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.httpClient
      .post<Post>(`${this.apiPath}/posts`, post)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler() {
    return throwError(
      "Sorry, our services does not work right now, please try that later"
    );
  }
}
