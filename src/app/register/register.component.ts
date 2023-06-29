import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Country, Gender, Group, Role, User } from '../utils/types';
import { CountryService } from '../services/country.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  countries!: Country[];
  countriesGroup!: Group[];

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService,
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.registerForm = this.builder.group({
      id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(4)])),
      name: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.compose([Validators.required])),
      email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
      gender: this.builder.control(Gender.MALE),
      role: this.builder.control(Role.USER),
      country: this.builder.control('', Validators.required)
    });
    this.countryService.getAllCountries().subscribe(data => {
      this.countries = data;
      this.countriesGroup = groupByContinent(this.countries, (country) => country.continent);
    })

  }

  proceedRegistration() {

    if (this.registerForm.valid) {
      const newUser: User = {
        id: this.registerForm.value.id,
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        role: this.registerForm.value.role,
        country: this.registerForm.value.country,
        gender: this.registerForm.value.gender
      }
      this.authService.registerUser(newUser)
        .subscribe((response: User) => {
          this.toastService.success("Registration succeeded");
          this.router.navigate(['']);
        })
    } else {
      this.toastService.warning("Please make sure you enter valid data", "Registration failed");
    }
  }

  get passwordControl() {
    return this.registerForm.get('password');
  }
}


const groupByContinent = (array: Country[], keyFn: (value: Country) => string): Group[] => {
  return array.reduce((result: Group[], item: Country) => {
    const groupKey = keyFn(item);
    if (result.every(value => value.continent !== groupKey)) {
      const group: Group = { continent: item.continent,  countries: [item] };
      result.push(group);
    } else {
      result.forEach((group: Group) => {
        if (group.continent === groupKey) {
          group.countries.push(item);
        }
      })
    }
    return result;
  }, []);
}