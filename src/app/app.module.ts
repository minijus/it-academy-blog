import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { PostComponent } from "./post/post.component";

//fb.com/home/0

const routes: Route[] = [
  {
    path: "home",
    component: HomePageComponent
  },
  { path: "post/:id", component: PostDetailsComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
