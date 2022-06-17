import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class TasksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
