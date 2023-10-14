import { Component, OnInit } from '@angular/core';
import { HousingService } from '../services/housing.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HLocation } from '../utils/types';

@Component({
  selector: 'app-post-house',
  templateUrl: './post-house.component.html',
  styleUrls: ['./post-house.component.css']
})
export class PostHouseComponent {

  locationForm!: FormGroup;
  file!: File;

  constructor(
    private housingService: HousingService,
    private toast: ToastrService,
    private builder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
    this.locationForm = this.builder.group({
      name: this.builder.control('', Validators.required),
      city: this.builder.control('', Validators.required),
      state: this.builder.control('', Validators.required),
      availableUnits: this.builder.control('', [Validators.required, Validators.min(0)]),
      wifi: this.builder.control(false, Validators.required),
      laundry: this.builder.control(false, Validators.required),
    })
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  proceedPost() {
    /*
    const locationData = new FormData();
    locationData.append('name', this.locationForm.get('name')?.value);
    locationData.append('city', this.locationForm.get('city')?.value);
    locationData.append('state', this.locationForm.get('state')?.value);
    locationData.append('availableUnits', this.locationForm.get('availableUnits')?.value);
    locationData.append('wifi', this.locationForm.get('wifi')?.value);
    locationData.append('laundry', this.locationForm.get('laundry')?.value);

    locationData.append('photo', this.file);
    */
    const location: HLocation = {
      id: this.housingService.getLastIndex() + 1,
      name: this.locationForm.get('name')?.value,
      city: this.locationForm.get('city')?.value,
      state: this.locationForm.get('state')?.value,
      availableUnits: this.locationForm.get('availableUnits')?.value,
      wifi: this.locationForm.get('wifi')?.value,
      laundry: this.locationForm.get('laundry')?.value,
      photo: this.file.name
    }
    this.housingService.postLocation(location).subscribe(
      (response => {
        this.toast.success("Location posted successfully");
      }),
      (err => {
        this.toast.error("Error while posting the location");
      })
    )
  }

  previousRoute() {
    this.location.back();
  }
}
