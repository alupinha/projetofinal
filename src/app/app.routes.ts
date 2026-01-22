
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Página inicial
    loadComponent: () =>
      import('./pages/welcome/welcome').then(m => m.Welcome),
  },
  {
    path: 'destinos', // Página de serviços
    loadComponent: () =>
      import('./pages/destinos/destinos').then(m => m.destinos),
  },
  {
    path: 'login', // Página da galeria
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login),
  },

  {
    path: '**', // Qualquer rota inválida redireciona para a Home
    redirectTo: '',
  },
];

