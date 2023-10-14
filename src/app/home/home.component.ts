import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HousingService } from '../services/housing.service';
import { HLocation } from '../utils/types';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loginUser: any;
  housingLocationList: HLocation[] = [];
  filteredLocationList: HLocation[] = [];
  no_data: boolean = false;
  gridCols!: number;
  width!: number;
  showHouses: boolean = false;

  constructor(
    private authService: AuthService,
    private housingService: HousingService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.loginUser = this.authService.getLoginUser();
    if (this.authService.isLogIn()) {
      this.showHouses = true;
    } else {
      this.showHouses = false;
    }
  }

  ngOnInit() {
    this.housingService.getAllLocations().subscribe({
      next: (locations: HLocation[]) => {
        this.housingLocationList = locations;
        this.filteredLocationList = locations;
        this.no_data = false;
        this.gridCols = this.getGridCols();
      },
      error: (err: any) => {
        this.no_data = true;
      }
    });
  }


  filter(filterText: string) {
    if (!filterText) {
      this.filteredLocationList = this.housingLocationList;
    }
    this.housingLocationList.filter(
      location => location.city.toLowerCase().includes(filterText.toLowerCase()));
  }

  handleSize(event: any) {
    this.gridCols = this.getGridCols();
  }

  getGridCols(): number {
    this.width = 350;
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      return 3;
    }
    if (this.breakpointObserver.isMatched('(min-width: 780px) and (max-width: 1919px)')) {
      if (this.breakpointObserver.isMatched('(min-width:960px)')) {
        this.width = 450;
      }
      return 2;
    }
    if (this.breakpointObserver.isMatched('(max-width: 779px)')) {
      if (this.breakpointObserver.isMatched('(min-width: 510px)')) {
        this.width = 500;
      }
      return 1;
    }
    return 4;
  }
}
