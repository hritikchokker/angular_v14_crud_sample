import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TasksApiService } from '../tasks-api.service';
import { Tasks, TasksModelType } from '../tasks.class';

const getActivatedRoute = () => {
  const instance = inject(ActivatedRoute);
  return instance;
};

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class AddEditTaskComponent implements OnInit {
  tasksForm!: FormGroup;
  param!: string;
  // constructor(private readonly activatedRoute: ActivatedRoute) {}
  constructor(
    private _formBuilder: FormBuilder,
    private taskApiService: TasksApiService,
    private router: Router
  ) {
    // inject must always be called inside constructor
    getActivatedRoute().params.subscribe((param) => {
      const { id } = param;
      this.param = id;
    });
    this.tasksForm = this.createForm();
  }
  createForm(): FormGroup {
    return this._formBuilder.group({
      name: ['go home'],
      author: ['hritik'],
      message: ['must go to home'],
    });
  }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log('params', params);
    // });
  }
  onSubmit(): void {
    if (this.tasksForm.valid) {
      const { name, author, message } = this.tasksForm.value;
      const newTask = new Tasks(name, author, message);
      console.log(newTask.getTaskData(),'data');
      this.taskApiService
        .addTask(newTask.getTaskData())
        .subscribe((data: TasksModelType) => {
          this.router.navigate(['/tasks']);
        });
    }
  }
}
