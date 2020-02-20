import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PostComponent } from "./post/post.component";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PostPageComponent } from "./post-page/post-page.component";
import { RecentPostsComponent } from "./recent-posts/recent-posts.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { HttpClientModule } from "@angular/common/http";
import { PostWritingComponent } from "./post-writing/post-writing.component";
import { PostFormComponent } from "./post-form/post-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { CategoryPageComponent } from "./category-page/category-page.component";
import { PostListComponent } from "./post-list/post-list.component";
import { AuthorDetailsComponent } from "./author-details/author-details.component";
import { AuthorPageComponent } from "./author-page/author-page.component";
import { AuthorsPageComponent } from "./authors-page/authors-page.component";

const appRoutes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "posts/add", component: PostWritingComponent },
  { path: "post/:id", component: PostPageComponent },
  { path: "authors", component: AuthorsPageComponent },
  { path: "authors/:id", component: AuthorPageComponent },
  { path: "category/:id", component: CategoryPageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent,
    AboutPageComponent,
    PostComponent,
    NotFoundComponent,
    RecentPostsComponent,
    PostFormComponent,
    PostWritingComponent,
    NavbarComponent,
    CategoryPageComponent,
    PostListComponent,
    AuthorDetailsComponent,
    AuthorPageComponent,
    AuthorsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { anchorScrolling: "enabled" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
