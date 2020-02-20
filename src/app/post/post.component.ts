import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Post } from "../shared/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() readMoreClick = new EventEmitter();
  @Output() commentsClick = new EventEmitter();
  @Output() authorClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onCommentsClick(post: Post) {
    this.commentsClick.emit(post);
  }

  onAuthorClick(post: Post) {
    this.authorClick.emit(post);
  }
}
