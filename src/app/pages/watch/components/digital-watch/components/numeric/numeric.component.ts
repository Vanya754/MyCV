import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.scss'],
})
export class NumericComponent {
  @Input() numeric!: number;
}
