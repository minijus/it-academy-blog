import { Injectable } from "@angular/core";
import { Post } from "../shared/post";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private readonly apiPath = "/api";
  constructor(private httpClient: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.apiPath}/posts`);
  }
  getPost({ id }): Observable<Post> {
    return this.httpClient.get<Post>(`${this.apiPath}/posts/${id}`);
  }
}
