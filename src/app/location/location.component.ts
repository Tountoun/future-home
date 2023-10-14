import { Component, Input } from '@angular/core';
import { HLocation } from '../utils/types';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  @Input() location!: HLocation;
  @Input() width!: number;
}
