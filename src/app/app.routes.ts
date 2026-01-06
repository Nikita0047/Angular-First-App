import { Routes } from '@angular/router';

export const routes: Routes = [
    //route for home component
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {return import('./home/home').then((c) => c.Home)},
    
    },
    //route for todos component
    {
        path: 'Todos',
        loadComponent: () => {return import('./todos/todos').then((c) => c.Todos)},
    }
];
