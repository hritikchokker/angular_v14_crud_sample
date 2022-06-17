import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class SearchFieldComponent implements OnInit {
  constructor() {}
  @Input() control: FormControl = new FormControl();
  @Output() private searchResult: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    this.updateValue();
  }

  clearSearchAndEmit(): void {
    this.control.reset();
    this.searchResult.emit('');
  }

  updateValue() {
    this.control.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
        // filter((val: string) => Boolean(val.trim()))
      )
      .subscribe((res: string) => {
        console.log(res, 'res');
        this.searchResult.emit(res);
      });
  }
}
