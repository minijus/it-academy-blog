import { Injectable } from "@angular/core";
import { Post } from "../shared/post";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}
  getPosts(): Promise<Post[]> {
    return this.httpClient.get<Post[]>("/api/posts").toPromise();
  }
  getPost({ id }) {
    return this.getPosts().then(posts => {
      return posts.find(post => post.id === id);
    });
  }
}
