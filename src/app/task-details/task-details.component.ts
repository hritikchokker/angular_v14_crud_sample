import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TaskDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
