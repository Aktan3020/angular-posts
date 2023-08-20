import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AuthGuard } from './AuthGuard';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
  , {
    path: 'posts',
    component: PostsComponent,
    canActivate:[AuthGuard]
  },
  { path: 'posts/:id', component: PostDetailsComponent ,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
