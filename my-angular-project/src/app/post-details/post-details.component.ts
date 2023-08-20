import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post-details',
  styleUrls:['./post-details.component.css'],
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute,private http:HttpClient) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.params['id']; // Получение параметра id из URL
    this.http.get('https://jsonplaceholder.typicode.com/posts/'+postId).subscribe(
      (data) => {
        this.post = data;
      },
      (error) => {
        console.error('Error fetching post details:', error);
      }
    );
  }
}
