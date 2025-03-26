import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { PostComponent } from './pages/post/post.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: 'new', component: NewComponent },
    { path: 'post', component: PostComponent },
    { path: "**", redirectTo: 'home' }

];
