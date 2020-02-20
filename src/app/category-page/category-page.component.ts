import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../shared/category";
import { CategoriesService } from "../services/categories.service";
import { ActivatedRoute } from "@angular/router";
import {Post} from "../shared/post";

@Component({
  selector: "app-category-page",
  templateUrl: "./category-page.component.html",
  styleUrls: ["./category-page.component.scss"]
})
export class CategoryPageComponent implements OnInit {
  category$: Observable<Category>;
  posts$: Observable<Post[]>;
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get("id");
      this.category$ = this.categoriesService.getCategory(id);
      this.posts$ = this.categoriesService.getCategoryPosts(id);
    });
  }
}
