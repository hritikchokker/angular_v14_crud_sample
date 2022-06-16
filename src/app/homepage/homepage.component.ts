import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
