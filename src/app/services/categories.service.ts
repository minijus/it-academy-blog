import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "../shared/category";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  getCategories() {
    return this.httpClient.get<Category[]>("/api/categories");
  }
}
