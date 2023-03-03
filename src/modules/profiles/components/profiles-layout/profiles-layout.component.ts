import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/services/user.service';
import { UserData } from 'src/shared/models/user.interface';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-profiles-layout',
  templateUrl: './profiles-layout.component.html',
  styleUrls: ['./profiles-layout.component.scss']
})
export class ProfilesLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'email', 'website'];
  dataSource: MatTableDataSource<UserData>;

  subscriptions = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.userService.getUsers().subscribe((users) => {
        this.dataSource.data = users;
      })
    )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
