import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
  constructor(private _formBuilder: FormBuilder) {
    // inject must always be called inside constructor
    getActivatedRoute().params.subscribe((param) => {
      const { id } = param;
      this.param = id;
    });
    this.tasksForm = this.createForm();
  }
  createForm(): FormGroup {
    return this._formBuilder.group({
      name: [''],
      author: [''],
      message: [''],
    });
  }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log('params', params);
    // });
  }
}
