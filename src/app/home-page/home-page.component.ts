import {Component, OnInit} from "@angular/core";
import {Post} from "../shared/post";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  posts: Post[];
  constructor() {}

  ngOnInit() {
    this.posts = [
      {
        id: "0",
        author: "Darius",
        title: "Post 1",
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Autem commodi cupiditate dolorem doloremque dolorum fugiat
              saepe sint soluta ullam voluptates voluptatum?`,
        img: "assets/photo-0.jpeg"
      },
      {
        id: "1",
        author: "Kazimieras",
        title: "Post 2",
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Autem commodi cupiditate dolorem doloremque dolorum fugiat
              saepe sint soluta ullam voluptates voluptatum?`,
        img: "assets/photo-1.jpeg"
      },
      {
        id: "2",
        author: "Indrė",
        title: "Post 3",
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Autem commodi cupiditate dolorem doloremque dolorum fugiat
              saepe sint soluta ullam voluptates voluptatum?`,
        img: "assets/photo-2.jpeg"
      },
      {
        id: "3",
        author: "Jurgis",
        title: "Post 4",
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Autem commodi cupiditate dolorem doloremque dolorum fugiat
              saepe sint soluta ullam voluptates voluptatum?`,
        img: "assets/photo-3.jpeg"
      },
      {
        id: "4",
        author: "Laura",
        title: "Post 5",
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Autem commodi cupiditate dolorem doloremque dolorum fugiat
              saepe sint soluta ullam voluptates voluptatum?`,
        img: "assets/photo-4.jpeg"
      },
      {
        id: "5",
        author: "Minijus",
        title: "Post 6",
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Autem commodi cupiditate dolorem doloremque dolorum fugiat
              saepe sint soluta ullam voluptates voluptatum?`,
        img: "assets/photo-5.jpeg"
      }
    ];
  }

  handlePostReadMoreClick(post: Post) {
    console.log("Read more clicked: ", post);
  }

  handlePostCommentsClick(post: Post) {
    console.log("Comments clicked: ", post);
  }

  handlePostAuthorClick(post: Post) {
    console.log("Author clicked: ", post);
  }
}
