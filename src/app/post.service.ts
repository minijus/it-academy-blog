import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./shared/post";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  loadPosts() {
    return this.httpClient.get<Post[]>("/api/posts").toPromise();
  }
  getPost(id) {
    return this.httpClient.get<Post>(`/api/posts/${id}`).toPromise();
  }
}
