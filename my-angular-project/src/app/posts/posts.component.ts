import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(private http: HttpClient) {}
  posts: any = [];
  user:any
  ngOnInit(): void {
  this.user = JSON.parse(localStorage.getItem('user') as any)
  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data) => {
        console.log(
          data
        );
        
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
