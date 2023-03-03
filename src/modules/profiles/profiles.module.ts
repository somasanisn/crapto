import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesLayoutComponent } from './components/profiles-layout/profiles-layout.component';
import { RouterModule } from '@angular/router';
import { routes } from './profiles.routing';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ProfilesLayoutComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfilesModule { }
