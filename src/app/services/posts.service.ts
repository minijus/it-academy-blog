import { Injectable } from "@angular/core";
import { Post } from "../shared/post";
import { posts } from "./data";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor() {}
  getPosts(): Post[] {
    return posts;
  }
  getPost({ id }) {
    return this.getPosts().find(post => post.id === id);
  }
}
