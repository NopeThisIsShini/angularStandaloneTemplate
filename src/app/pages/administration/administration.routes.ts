import { Routes } from '@angular/router';
import { LOCAL_ROUTES } from '../../utils/routes/local.route';

export const ADMINISTRATION_ROUTES: Routes = [
    { path: '', redirectTo: LOCAL_ROUTES.ROLE, pathMatch: 'full' },
    { path: LOCAL_ROUTES.ROLE, loadComponent: () => import('./component/role/role.component').then(m => m.RoleComponent) },
    { path: LOCAL_ROUTES.USER, loadComponent: () => import('./component/user/user.component').then(m => m.UserComponent) },
];
