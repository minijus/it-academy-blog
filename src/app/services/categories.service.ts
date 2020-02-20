import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "../shared/category";
import { Post } from "../shared/post";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  getCategories() {
    return this.httpClient.get<Category[]>("/api/categories");
  }

  getCategory(id: string) {
    return this.httpClient.get<Category>(`/api/categories/${id}`);
  }

  getCategoryPosts(id: string) {
    return this.httpClient.get<Post[]>(`/api/categories/${id}/posts`);
  }
}
