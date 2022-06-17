import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TasksModelType } from 'src/app/tasks.class';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent implements OnInit {
  taskData!: TasksModelType;
  @Input() set taskPayload(data: TasksModelType) {
    this.taskData = data;
  }

  constructor() {}

  ngOnInit(): void {}
}
