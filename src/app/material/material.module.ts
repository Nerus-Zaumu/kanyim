import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list'
import { MatNativeDateModule } from '@angular/material/core';

const MaterialElements = [
  CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatSelectModule,
  MatGridListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatTableModule,
  MatIconModule,
  MatTooltipModule,
  MatListModule,
  MatNativeDateModule
]

@NgModule({
  declarations: [],
  imports: MaterialElements,
  exports: MaterialElements,
})
export class MaterialModule { }
