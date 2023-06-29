import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../services/auth.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePopUpComponent } from '../update-pop-up/update-pop-up.component';
import { User } from '../utils/types';


@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent {
  users!: User[];
  dataSource: any;
  displayedColumns: string[] = ["username", "name", "email", "role", "country", "action"];
  pageSizeOptions: number[] = [5, 10, 15];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private authService: AuthService, private dialog: MatDialog){
    this.loadUsers();
  }

  loadUsers() {
    this.authService.getAllUsers().subscribe((response: User[]) => {
      this.users = response;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  updateUser(code: string) {
    const dialogRef = this.dialog.open(UpdatePopUpComponent, {
      enterAnimationDuration: "1000ms",
      exitAnimationDuration: "1000ms",
      data: {
        code: code
      },
      width: "50%"
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.loadUsers();
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
