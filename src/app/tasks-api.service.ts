import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TasksModelType } from './tasks.class';
import { TasksServiceClass } from './tasks.service';

const cudOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TasksApiService extends TasksServiceClass {
  constructor(private http: HttpClient) {
    super();
  }
  getTasks(): Observable<TasksModelType[]> {
    return this.http.get<Array<TasksModelType>>(this.tasksUrl);
    // .pipe(catchError(this.handleError));
  }
  getTask(id: number): Observable<TasksModelType> {
    return this.http.get<TasksModelType>(`${this.tasksUrl}/${id}`);
  }

  addTask(taskDetails: TasksModelType): Observable<TasksModelType> {
    return this.http.post<TasksModelType>(
      this.tasksUrl,
      taskDetails,
      cudOptions
    );
  }

  deleteTask(id: number): Observable<TasksModelType> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<TasksModelType>(url, cudOptions);
    // .pipe(catchError(this.handleError));
  }

  searchTask(term: string): Observable<Array<TasksModelType>> {
    term = term.trim();
    // add safe, encoded search parameter if term is present
    const options = term ? { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Array<TasksModelType>>(this.tasksUrl, options);
    // .pipe(catchError(this.handleError));
  }

  updateTask(taskData: TasksModelType): Observable<null | TasksModelType> {
    return this.http.put<TasksModelType>(this.tasksUrl, taskData, cudOptions);
    // .pipe(catchError(this.handleError));
  }
}
