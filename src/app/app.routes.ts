import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.routes').then(m => m.BLOG_ROUTES)
      },
      { path: '**', component: NotFoundComponent }
    ]
  }
];
