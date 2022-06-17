import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksModelType } from './tasks.class';

@Injectable({
  providedIn: 'root',
})
export class TasksService implements InMemoryDbService {
  constructor() {}

  createDb(
    reqInfo?: RequestInfo | undefined
  ): {} | Observable<{}> | Promise<{}> {
    const tasks: Array<TasksModelType> = [];
    return { tasks };
  }
}

export abstract class TasksServiceClass {
  tasksUrl = 'api/tasks';
  abstract getTasks(): Observable<TasksModelType[]>;
  abstract getTask(id: number): Observable<TasksModelType>;
  abstract addTask(taskDetails: TasksModelType): Observable<TasksModelType>;
  abstract deleteTask(id: number): Observable<TasksModelType>;
  abstract searchTask(term: string): Observable<TasksModelType[]>;
  abstract updateTask(
    taskDetails: TasksModelType
  ): Observable<null | TasksModelType>;
}
