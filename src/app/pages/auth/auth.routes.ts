import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LOCAL_ROUTES } from '../../utils/routes/local.route';

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: LOCAL_ROUTES.LOGIN, pathMatch: 'full' },
    { path: LOCAL_ROUTES.LOGIN, component: LoginComponent }
];
