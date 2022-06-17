import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { filter, Observable, tap } from 'rxjs';
import { SearchFieldComponent } from '../common/search-field/search-field.component';
import { TaskCardComponent } from '../common/task-card/task-card.component';
import { TasksApiService } from '../tasks-api.service';
import { TasksModelType } from '../tasks.class';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TaskCardComponent,
    SearchFieldComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent implements OnInit {
  taskList$!: Observable<Array<TasksModelType>>;
  constructor(private taskApiService: TasksApiService) {}

  ngOnInit(): void {
    console.log('this is called');
    this.taskList$ = this.taskApiService.getTasks();
  }
  filterData(str: string) {
    if (!str) {
      this.taskList$ = this.taskApiService.getTasks();
    } else {
      this.taskList$ = this.taskApiService.searchTask(str);
    }
  }
}
