import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { HLocation, HProperty } from '../utils/types';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  location: HLocation | undefined;
  displayedColumns: string[] = ["property", "value"];
  locProperties!: HProperty[];
  dataSource!: MatTableDataSource<HProperty>;
  cols: number = 2;

  constructor(private route: ActivatedRoute, private housingService: HousingService, private breakpointObserver: BreakpointObserver) {
    const locationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getLocationById(locationId).subscribe({
      next: (location: HLocation) => {
        this.location = location;
        this.locProperties = [
          { property: 'Available Units', value: location.availableUnits.toString() },
          { property: 'Wifi', value: location.wifi ? "Yes" : "No" },
          { property: 'Laundry', value: location.laundry ? "Yes" : "No" }
        ]
        this.dataSource = new MatTableDataSource(this.locProperties);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  handleSize(event: any) {
    this.cols = this.getCols();
  }

  getCols(): number {
    this.cols = 2;
    if (this.breakpointObserver.isMatched('(max-width: 979px)')) {
      this.cols = 1;
    }
    return this.cols;
  }

}
