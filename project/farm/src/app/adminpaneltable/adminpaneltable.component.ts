import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AdminpaneltableDataSource } from './adminpaneltable-datasource';

@Component({
  selector: 'app-adminpaneltable',
  templateUrl: './adminpaneltable.component.html',
  styleUrls: ['./adminpaneltable.component.css']
})
export class AdminpaneltableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AdminpaneltableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {
    this.dataSource = new AdminpaneltableDataSource(this.paginator, this.sort);
  }
}
