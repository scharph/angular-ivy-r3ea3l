import { Component, Input, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-squared-widget',
  templateUrl: './squared-widget.component.html',
  styleUrls: ['./squared-widget.component.scss'],
})
export class SquaredWidgetComponent implements OnInit {
  @Input()
  public size: 'sm' | 'md' | 'lg' = 'md';

  @Input()
  public isPile: boolean = false;

  protected val$: Observable<Number>;

  constructor() {
    this.val$ = interval(250).pipe(map((val) => val * 4));
  }

  ngOnInit() {}
}
