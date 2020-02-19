import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./shared/post";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  loadPosts() {
    return this.httpClient
      .get<{ posts: Post[] }>("/assets/post-list.json")
      .toPromise()
      .then(data => data.posts);
  }
  getPost(id) {
    return this.loadPosts().then(postList => postList.find(p => (p.id = id)));
  }
}
