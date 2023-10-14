import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@NgModule({
      exports: [
            MatInputModule,
            MatSelectModule,
            MatCardModule,
            MatRadioModule,
            MatCheckboxModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatDialogModule,
            MatFormFieldModule,
            MatButtonModule,
            MatIconModule,
            MatGridListModule,
            MatListModule
      ]
})
export class MaterialModule { }