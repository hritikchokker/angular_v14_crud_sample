import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./homepage/homepage.component').then((c) => c.HomepageComponent),
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./tasks/tasks.component').then((c) => c.TasksComponent),
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadComponent: () =>
          import('./tasks-list/tasks-list.component').then(
            (c) => c.TasksListComponent
          ),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./add-edit-task/add-edit-task.component').then(
            (c) => c.AddEditTaskComponent
          ),
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./add-edit-task/add-edit-task.component').then(
            (c) => c.AddEditTaskComponent
          ),
      },
    ],
  },
];
